import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared-module/shared-module.module';
import { PublishArticleComponent } from './publish-article.component';
import { PublishArticleService } from './publish-article.service';
import { PublishArticleDetailComponent } from './publish-article-detail/publish-article-detail.component';


@NgModule({
  declarations: [PublishArticleComponent, PublishArticleDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [PublishArticleService],
  exports: [PublishArticleComponent]
})
export class PublishArticleModule { }
