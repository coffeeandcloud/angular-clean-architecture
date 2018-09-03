import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantCardListComponent } from './elephant-card-list/elephant-card-list.component';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { ElephantRepository } from '../core/repositories/elephant.repository';
import { ElephantWebRepository } from '../data/repository/elephant-web-repository/elephant-web.repository';

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
    {provide: ElephantRepository, useClass: ElephantWebRepository}
  ]
})
export class PresentationModule { }
