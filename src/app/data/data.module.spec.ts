import { DataModule } from './data.module';

describe('DataModule', () => {
  let dataModule: DataModule;

  beforeEach(() => {
    dataModule = new DataModule();
  });

  it('should create an instance', () => {
    expect(dataModule).toBeTruthy();
  });
});
