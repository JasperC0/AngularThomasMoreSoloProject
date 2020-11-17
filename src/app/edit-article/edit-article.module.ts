import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared-module/shared-module.module'
import {EditArticleService} from './edit-article.service'
import { HttpClientModule } from '@angular/common/http';
import { EditArticleComponent } from './edit-article.component';

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [EditArticleService],
  exports: [EditArticleComponent]
})
export class EditArticleModule { }
