import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { TagsService } from './tags.service'
import { TagsComponent } from './tags.component';
import { SharedModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TagsService],
  exports: [TagsComponent]
})
export class TagsModule { }
