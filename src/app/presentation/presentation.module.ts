import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElephantCardListComponent } from './elephant-card-list/elephant-card-list.component';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { ElephantRepository } from '../core/repositories/elephant.repository';
import { ElephantMockRepository } from '../data/repository/elephant-mock.repository';
import { ElephantEditorComponent } from './elephant-editor/elephant-editor.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule
  ],
  declarations: [
    ElephantCardListComponent,
    ElephantEditorComponent
  ],
  exports: [
    ElephantCardListComponent,
    ElephantEditorComponent
  ],
  providers: [
    {provide: ElephantRepository, useClass: ElephantMockRepository}
  ]
})
export class PresentationModule { }
