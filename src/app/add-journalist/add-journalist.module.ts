import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from 'src/app/shared-module/shared-module.module'
import { AddJournalistComponent } from './add-journalist.component';
import { AddJournalistService } from './add-journalist.service';
import {RegisterService} from 'src/app/register/register.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddJournalistComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [AddJournalistService],
  exports: [AddJournalistComponent]
})
export class AddJournalistModule { }
