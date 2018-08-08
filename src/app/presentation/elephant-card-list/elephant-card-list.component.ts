import { Component, OnInit } from '@angular/core';
import { ElephantModel } from '../../core/domain/elephant.model';
import { GetAllElephantsUsecase } from '../../core/usecases/get-all-elephants.usecase';

@Component({
  selector: 'app-elephant-card',
  templateUrl: './elephant-card-list.component.html',
  styleUrls: []
})
export class ElephantCardListComponent implements OnInit {

  elephants: Array<ElephantModel>;

  constructor(private getAllElephants: GetAllElephantsUsecase) {

  }

  ngOnInit() {

  }

  updateElephants() {
    this.elephants = [];
    this.getAllElephants.execute(null).subscribe((value: ElephantModel) => {
      this.elephants.push(value);
    });
  }
}
