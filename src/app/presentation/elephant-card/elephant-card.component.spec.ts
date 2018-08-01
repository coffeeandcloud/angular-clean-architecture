import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantCardComponent } from './elephant-card.component';

describe('ElephantCardComponent', () => {
  let component: ElephantCardComponent;
  let fixture: ComponentFixture<ElephantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
