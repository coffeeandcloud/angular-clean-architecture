import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  onElephantSaved(): void {
    console.log('Elephant saved.');
  }
}
