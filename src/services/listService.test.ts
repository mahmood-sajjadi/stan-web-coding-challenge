import {getList} from './listService'

describe('Button', () => {
  it('getList should call apiService', () => {
    const fn = vi.fn() ;
    getList(fn);
    expect(fn).toBeCalledTimes(1);
    expect(fn.mock.calls[0][0]).toBe('list');
  })
})