import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WedgeRepository } from './core/repositories/wedge-repository';
import { WebWedgeRepository } from './data/repository/web-wedge.repository';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: WedgeRepository, useClass: WebWedgeRepository}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
