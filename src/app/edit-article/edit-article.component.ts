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
    this.articles = this._editArticelesService.getArticlesFromUser(this.userid).pipe(map((articleslist: Article[]) => articleslist.filter(a => a.articleStatusID === 3)))
  }

  ngOnInit(): void {
  }

  createOrUpdateArticle() {
    let validArticle = true


    if (this.selectedArticle.articleStatusID == 0 || this.selectedArticle.articleStatusID == undefined) {
      validArticle = false
      alert("please give a valid status to the article")
    }

    if (this.selectedArticle.tagID == 0|| this.selectedArticle.tagID == undefined) {
      validArticle = false
      alert("please give a valid tag to the article")
    }

    if (validArticle) {
      if (this.selectedArticle.articleID == 0) {
        this._editArticelesService.addArticle(this.selectedArticle).subscribe(a => {
          this.resetWindow()
        })
      }else{
        this._editArticelesService.updateArticle(this.selectedArticle,this.selectedArticle.articleID).subscribe(a => {
          this.resetWindow()
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

  selectUpdate(a: Article) {
    this.selectedArticle = a;
    this.originalStatus = this.selectedArticle.articleStatusID
    this.originalTag = this.selectedArticle.tagID
    console.log(this.selectedArticle)
  }

  resetWindow() {
    window.location.reload();
  }
}
