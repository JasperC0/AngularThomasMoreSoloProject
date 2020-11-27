import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from 'src/app/articles/articles.service'
import { Article } from 'src/app/models/articles/article.model';
import { map } from 'rxjs/operators';
import { Tag } from 'src/app/models/tag/tag.model';
import { Like } from '../models/like/like.model';
import { Comment } from '../models/comment/comment.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Observable<Article[]>;
  shownArticles: Observable<Article[]>;
  tags: Observable<Tag[]>;
  selectedArticle: Article = null;
  tag: number = 0;
  searchTitle: string = "";
  searchBody: string = "";
  comments: Observable<Comment[]>;
  likes: Observable<Like[]>

  constructor(private _articelesService: ArticlesService) {
    this.articles = this._articelesService.getArticles().pipe(map((articleslist: Article[]) => articleslist.filter(a => a.articleStatusID === 1)))
    this.tags = this._articelesService.getTags();
    this.shownArticles = this.articles
  }

  ngOnInit(): void {
  }

  filter() {
    this.shownArticles = this.articles
    if (this.tag != 0) {
      this.shownArticles = this.shownArticles.pipe(map((articleslist: Article[]) => articleslist.filter(a => a.tagID.toString() === this.tag.toString())))
    }
    if (this.searchBody !== "") {
      this.shownArticles = this.shownArticles.pipe(map((articleslist: Article[]) => articleslist.filter(a => a.body.toLocaleLowerCase().includes(this.searchBody.toLocaleLowerCase()))))
    }
    if (this.searchTitle !== "") {
      this.shownArticles = this.shownArticles.pipe(map((articleslist: Article[]) => articleslist.filter(a => a.title.toLocaleLowerCase().includes(this.searchTitle.toLocaleLowerCase()))))
    }
  }

  onSelectChange(value) {
    this.tag = value
  }

  showDetailArticle(a: Article) {
    this.comments = this._articelesService.getCommentsFromArticle(a.articleID)
    this.likes = this._articelesService.getLikesFromArticle(a.articleID)
    this.selectedArticle = a;
  }

}
