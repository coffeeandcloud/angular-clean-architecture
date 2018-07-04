import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { WebWedgeRepository } from './data/repository/web-wedge.repository';
import { GetWedgeByIdUsecase } from './core/usecases/get-wedge-by-id.usecase';
import { WedgeRepository } from './core/repositories/wedge-repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    CoreModule
  ],
  providers: [
    {provide: WedgeRepository, useClass: WebWedgeRepository},
    GetWedgeByIdUsecase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
