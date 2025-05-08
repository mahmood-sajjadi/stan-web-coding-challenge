import type { ListResponse } from '../services/type';
import {getList} from './getList'

describe('Button', () => {
  it('getList should return filtered list', () => {
    const data: ListResponse = {
        total: 2,
        entries: [{
            description: 'd',
            images: {
                "Poster Art": {
                    height: 1,
                    url: '1',
                    width: 1
                }
            },
            programType: 'movie',
            releaseYear: 1,
            title: 't'
        }, {
            description: 'd2',
            images: {
                "Poster Art": {
                    height: 1,
                    url: '2',
                    width: 1
                }
            },
            programType: 'series',
            releaseYear: 1,
            title: 't2'
        }]
    }
    expect(getList(data, 'movie')).toEqual([data.entries[0]]);
    expect(getList(data, 'series')).toEqual([data.entries[1]]);
  })
})