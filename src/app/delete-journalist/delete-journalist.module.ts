import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared-module/shared-module.module'
import { HttpClientModule } from '@angular/common/http';
import { DeleteJournalistComponent } from './delete-journalist.component';
import { DeleteJournalistService } from './delete-journalist.service';

@NgModule({
  declarations: [DeleteJournalistComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [DeleteJournalistService],
  exports: [DeleteJournalistComponent]
})
export class DeleteJournalistModule { }
