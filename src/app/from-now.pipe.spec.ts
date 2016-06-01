import {
  it,
  describe,
  expect
} from '@angular/core/testing';
import { FromNow } from './from-now.pipe';

describe('FromNow Pipe', () => {

  it('should transform the input', () => {
    // given a pipe
    let pipe = new FromNow();

    // when transforming the date
    let date = '2016-02-18T08:02:00Z';
    let transformed = pipe.transform(date);

    // then we should have a formatted string
    expect(transformed).toContain('ago');
  });
});
