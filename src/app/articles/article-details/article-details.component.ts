import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/articles/article.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article: Article
  constructor() {
  }

  ngOnInit(): void {
  }

}
