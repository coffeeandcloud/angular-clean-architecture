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
    family: ''
  };

  @Output()
  onElephantSaved: EventEmitter<void> = new EventEmitter();

  constructor(private saveElephant: SaveElephantUsecase) {
  }

  onAddElephantClicked() {
    this.saveElephant.execute(this.newElephant).subscribe(() => {
      console.log('Done saving elephant with values: ' + JSON.stringify(this.newElephant));
      this.onElephantSaved.next();
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
