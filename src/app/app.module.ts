import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { PresentationModule } from './presentation/presentation.module';
import { ElephantMockRepository } from './data/repository/elephant-mock-repository/elephant-mock.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    CoreModule,
    PresentationModule
  ],
  providers: [
    {provide: ElephantRepository, useClass: ElephantMockRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
