import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from 'src/app/articles/articles.service'
import { Article } from 'src/app/models/articles/article.model';
import { map } from 'rxjs/operators';
import { Tag } from 'src/app/models/tag/tag.model';
import { Router } from '@angular/router';

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

  constructor(private _articelesService: ArticlesService) {
    this.articles = this._articelesService.getArticles().pipe(map((articleslist : Article[]) => articleslist.filter( a => a.articleStatusID === 1)))
    this.tags= this._articelesService.getTags();
    this.shownArticles = this.articles
    console.log(this.articles)
  }

  ngOnInit(): void {
  }

  onSelectChange(value)
  {
    this.shownArticles = this.articles.pipe(map((articleslist : Article[]) => articleslist.filter( a => a.tagID.toString() === value)))
  }

  showDetailArticle(a: Article) {
    this.selectedArticle = a;
  }

  /*navigate(id)
  {
    console.log(id)
    this.router.navigate(['article-detail', {id: id }]);
  }*/

}
