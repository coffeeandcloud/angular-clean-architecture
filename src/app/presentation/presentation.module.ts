import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantCardListComponent } from './elephant-card-list/elephant-card-list.component';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule
  ],
  declarations: [
    ElephantCardListComponent
  ],
  exports: [
    ElephantCardListComponent
  ],
  providers: [
  ]
})
export class PresentationModule { }
