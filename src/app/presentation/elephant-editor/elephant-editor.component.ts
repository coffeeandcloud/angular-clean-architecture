import { Component, EventEmitter, Output } from '@angular/core';
import { ElephantModel } from '../../core/domain/elephant.model';
import { SaveElephantUsecase } from '../../core/usecases/save-elephant.usecase';

@Component({
  selector: 'app-elephant-editor',
  templateUrl: './elephant-editor.component.html',
  styleUrls: ['./elephant-editor.component.scss']
})
export class ElephantEditorComponent {

  newElephant: ElephantModel = {
    name: '',
    family: 'baby'
  };

  @Output()
  elephantSaved: EventEmitter<void> = new EventEmitter();

  constructor(private saveElephant: SaveElephantUsecase) {
  }

  onAddElephantClicked() {
    this.saveElephant.execute(this.newElephant).subscribe(() => {
      this.newElephant = {name: '', family: ''};
      this.elephantSaved.next();
    }, () => {

    });
  }

  onElephantNameChanged(event) {
    this.newElephant.name = event.target.value;
  }

  onTypeChanged(event) {
    this.newElephant.family = event.target.value;
  }
}
