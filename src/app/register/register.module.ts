import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared-module/shared-module.module'
import { RegisterComponent } from './register.component';
import {RegisterService} from './register.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  exports: [RegisterComponent]
})
export class RegisterModule { }
