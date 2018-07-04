import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetWedgeByIdUsecase } from './core/usecases/get-wedge-by-id.usecase';
import { WedgeModel } from './core/domain/wedge.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = '';

  sub: Subscription;

  constructor(private getWedgeById: GetWedgeByIdUsecase) {
  }

  ngOnDestroy(): void {
    if (this.sub) { this.sub.unsubscribe(); }
  }

  ngOnInit(): void {
    this.sub = this.getWedgeById.execute(12).subscribe((wedge: WedgeModel) => {
      this.title = wedge.title;
    }, () => {
      console.warn('An error occured fetching wedges.');
    });
  }


}
