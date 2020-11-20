import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ArticlesService } from 'src/app/articles/articles.service'
import { ArticlesComponent } from 'src/app/articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component'
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [ArticlesComponent, ArticleDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ArticlesService],
  exports: [ArticlesComponent, ArticleDetailsComponent]
})
export class ArticlesModule { }
