import { Component, OnInit } from '@angular/core';
import { GetElephantByNameUsecase } from '../../core/usecases/get-elephant-by-name.usecase';
import { ElephantModel } from '../../core/domain/elephant.model';

@Component({
  selector: 'app-elephant-card',
  templateUrl: './elephant-card.component.html',
  styleUrls: ['./elephant-card.component.scss']
})
export class ElephantCardComponent implements OnInit {

  elephantName: String = '';

  elephants: Array<ElephantModel>;

  constructor(private getElephantByName: GetElephantByNameUsecase) {
    console.log(getElephantByName);
  }

  ngOnInit() {
    this.elephants = [];
    this.getElephantByName.execute('Bla').subscribe((value: ElephantModel) => {
      this.elephants.push(value);
    });
  }

}
