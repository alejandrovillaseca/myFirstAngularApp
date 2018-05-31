import { AFarenheitPipe } from './a-farenheit.pipe';

describe('AFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new AFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
