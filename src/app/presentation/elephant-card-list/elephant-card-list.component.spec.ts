import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantCardListComponent } from './elephant-card-list.component';

describe('ElephantCardListComponent', () => {
  let component: ElephantCardListComponent;
  let fixture: ComponentFixture<ElephantCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
