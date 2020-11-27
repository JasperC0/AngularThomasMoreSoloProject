import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles/article.model';
import { Comment } from 'src/app/models/comment/comment.model';
import { ArticlesService } from 'src/app/articles/articles.service'
import { Like } from 'src/app/models/like/like.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  userid: number
  text: string = "";
  submitted: boolean = false;
  likesAmount: number = 0;
  test: any;
  liked: boolean = false;
  likeExists = false;
  like: Like;

  @Input() comments: Observable<Comment[]>;
  @Input() likes: Observable<Like[]>
  @Input() article: Article
  constructor(private _articelesService: ArticlesService) {
    this.userid = parseInt(localStorage.getItem("user"))
  }

  ngOnInit(): void {
    //this.comments = this._articelesService.getCommentsFromArticle(this.article.articleID)
    //this.likes = this._articelesService.getLikesFromArticle(this.article.articleID)

  }

  ngOnChanges(changes: SimpleChanges) {
    //reset like values so it gives an accurate value every time a different article is selected in parent component
    this.likes = changes.likes.currentValue
    this.likeExists = false
    this.liked = false
    this.likesAmount = 0
    this.likes.subscribe(result => {
      result.forEach(like => {
        if (like.userID == this.userid) {
          this.liked = like.doLike
          this.likeExists = true;
          this.like = like;
        }
        if (like.doLike) {
          this.likesAmount++
        }
      });
    })
    
}

  onSubmit() {
    const comment = new Comment(0, this.text, this.userid, this.article.articleID)

    this._articelesService.addComment(comment).subscribe(() =>
      this.comments = this._articelesService.getCommentsFromArticle(this.article.articleID)

    )
    this.text = "";
  }

  likeAndUnlike() {
    if (this.likeExists) {
      if (this.liked) {
        this.like.doLike = false
        this._articelesService.updateLike(this.like).subscribe(() =>
          this.likes = this._articelesService.getLikesFromArticle(this.article.articleID)
        )
        this.liked = false;
        this.likesAmount--
      }
      else {
        this.like.doLike = true
        this._articelesService.updateLike(this.like).subscribe(() =>
          this.likes = this._articelesService.getLikesFromArticle(this.article.articleID)
        )
        this.liked = true;
        this.likesAmount++
      }
    }
    else {
      this._articelesService.addLike(new Like(0, true, this.userid, this.article.articleID)).subscribe(l =>

        this.like = l
      )
      this.likes = this._articelesService.getLikesFromArticle(this.article.articleID)
      this.likesAmount++
      this.liked = true
      this.likeExists = true
    }
  }

}
