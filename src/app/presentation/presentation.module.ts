import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantCardComponent } from './elephant-card/elephant-card.component';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { ElephantRepository } from '../core/repositories/elephant.repository';
import { ElephantMockRepository } from '../data/repository/elephant-mock.repository';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule
  ],
  declarations: [
    ElephantCardComponent
  ],
  exports: [
    ElephantCardComponent
  ],
  providers: [
    {provide: ElephantRepository, useClass: ElephantMockRepository}
  ]
})
export class PresentationModule { }
