import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { ElephantWebRepository } from './data/repository/elephant-web.repository';
import { PresentationModule } from './presentation/presentation.module';

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
    {provide: ElephantRepository, useClass: ElephantWebRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
