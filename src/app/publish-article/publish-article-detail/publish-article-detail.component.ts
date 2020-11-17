import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles/article.model';
import { PublishArticleService } from '../publish-article.service';

@Component({
  selector: 'app-publish-article-detail',
  templateUrl: './publish-article-detail.component.html',
  styleUrls: ['./publish-article-detail.component.scss']
})
export class PublishArticleDetailComponent implements OnInit {

  @Input() article: Article
  constructor(private _publishArticleService: PublishArticleService) {}

  ngOnInit(): void {
  }

  publish()
  {
    this.article.articleStatusID = 1
    this._publishArticleService.updateArticle(this.article,this.article.articleID).subscribe()
  }

}
