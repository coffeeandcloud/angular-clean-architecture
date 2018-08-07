import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantEditorComponent } from './elephant-editor.component';

describe('ElephantEditorComponent', () => {
  let component: ElephantEditorComponent;
  let fixture: ComponentFixture<ElephantEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
