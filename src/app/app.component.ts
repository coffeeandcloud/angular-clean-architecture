import { Component, ViewChild } from '@angular/core';
import { ElephantCardListComponent } from './presentation/elephant-card-list/elephant-card-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ElephantCardListComponent)
  private elephantCardListComponent: ElephantCardListComponent;

  onElephantSaved(): void {
    this.elephantCardListComponent.updateElephants();
  }
}
