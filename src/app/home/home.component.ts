import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/articles/article.model';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newestArticles: Observable<Article[]>;

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.newestArticles = this._homeService.getLast5Articles()
  }

}
