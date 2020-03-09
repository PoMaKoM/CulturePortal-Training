import { FilterPipe } from './filter.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe: FilterPipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
