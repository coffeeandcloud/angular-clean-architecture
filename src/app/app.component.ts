import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetElephantByNameUsecase } from './core/usecases/get-elephant-by-name.usecase';
import { ElephantModel } from './core/domain/elephant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
