import { PresentationModule } from './presentation.module';

describe('PresentationModule', () => {
  let presentationModule: PresentationModule;

  beforeEach(() => {
    presentationModule = new PresentationModule();
  });

  it('should create an instance', () => {
    expect(presentationModule).toBeTruthy();
  });
});
