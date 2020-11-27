import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';
import { PublishArticleService } from './publish-article.service';

@Component({
  selector: 'app-publish-article',
  templateUrl: './publish-article.component.html',
  styleUrls: ['./publish-article.component.scss']
})
export class PublishArticleComponent implements OnInit {
  articles: Observable<Article[]>;
  selectedArticle: Article= null;

  constructor(private _publishArticleService: PublishArticleService) {
    this.articles = this._publishArticleService.getArticlesFromStatus(2)
  }

  ngOnInit(): void {
  }

  showDetailArticle(a: Article) {
    this.selectedArticle = a;
  }
}
