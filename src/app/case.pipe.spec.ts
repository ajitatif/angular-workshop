import { CasePipe } from './case.pipe';

describe('CasePipe', () => {
  it('create an instance', () => {
    const pipe = new CasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert string to lowercase with param "lower"', () => {
  	const pipe = new CasePipe();
  	expect(pipe.transform('ABC', 'lower')).toBe('abc');
  });

  it('should convert string to uppercase with param "upper"', () => {
  	const pipe = new CasePipe();
  	expect(pipe.transform('abc', 'upper')).toBe('ABC');
  });

  it('should convert string to lowercase with no param', () => {
  	const pipe = new CasePipe();
  	expect(pipe.transform('ABC')).toBe('abc');
  });

  it('should not modifiy the string with any other param', () => {
  	const pipe = new CasePipe();
  	expect(pipe.transform('AbC', 'anything else')).toBe('AbC');
  });
});
