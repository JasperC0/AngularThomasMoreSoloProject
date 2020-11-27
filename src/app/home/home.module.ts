import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from './home.service'
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [HomeService],
  exports: [HomeComponent]
})
export class HomeModule { }
