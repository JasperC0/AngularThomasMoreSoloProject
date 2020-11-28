import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditArticleService } from './edit-article.service'
import { Article } from 'src/app/models/articles/article.model';
import { Tag } from '../models/tag/tag.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  articles: Observable<Article[]>;
  tags: Observable<Tag[]>
  userid: number;
  selectedArticle: Article;
  originalStatus: number
  originalTag: number

  constructor(private _editArticelesService: EditArticleService) {
    this.userid = parseInt(localStorage.getItem("user"))
    this.selectedArticle = new Article(0, "", "", "", "", 0, this.userid, 0)
    this.tags = this._editArticelesService.getTags()
    this.resetArticles()
  }

  ngOnInit(): void {
  }

  createOrUpdateArticle() {
    let validArticle = true

    //check if new article has a status
    if (this.selectedArticle.articleStatusID == 0 || this.selectedArticle.articleStatusID == undefined) {
      validArticle = false
      alert("please give a valid status to the article")
    }

    //check if new article has a tag
    if (this.selectedArticle.tagID == 0|| this.selectedArticle.tagID == undefined) {
      validArticle = false
      alert("please give a valid tag to the article")
    }

    //check if article needs to be updated or created
    if (validArticle) {
      if (this.selectedArticle.articleID == 0) {
        this._editArticelesService.addArticle(this.selectedArticle).subscribe(() => {
          this.resetArticles()
        })
      }else{
        this._editArticelesService.updateArticle(this.selectedArticle,this.selectedArticle.articleID).subscribe(() => {
          this.resetArticles()
        })
      }
    }
  }

  onTagChange(value) {
    if (value != 0) {
      this.selectedArticle.tagID = parseInt(value)
    }
    else {
      this.selectedArticle.tagID = this.originalTag
    }
  }

  onStatusChange(value) {
    if (value != 0) {
      this.selectedArticle.articleStatusID = parseInt(value)
    }
    else {
      this.selectedArticle.articleStatusID = this.originalStatus
    }

  }

  update(a: Article) {
    this.selectedArticle = a;
    this.originalStatus = this.selectedArticle.articleStatusID
    this.originalTag = this.selectedArticle.tagID
  }

  delete(a: Article)
  {
    this._editArticelesService.deleteArticle(a.articleID).subscribe(() =>
      this.resetArticles()
    )
  }

  resetArticles() {
    this.articles = this._editArticelesService.getArticlesFromUser(this.userid).pipe(map((articleslist: Article[]) => articleslist.filter(a => a.articleStatusID === 3)))
  }
}
