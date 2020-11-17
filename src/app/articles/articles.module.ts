import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ArticlesService } from 'src/app/articles/articles.service'
import { ArticlesComponent } from 'src/app/articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component'

@NgModule({
  declarations: [ArticlesComponent, ArticleDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ArticlesService],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
