import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import {List} from './List'
import { ListContext, type Status } from '../context/ListContext'
import type { ListResponse } from '../services/type'
import type { ProgramType } from '../config';

function testSetup(status: Status, error: string, result: ListResponse, programType: ProgramType) {
    
    return (
        <ListContext.Provider value={{
            status,
            error,
            result,
        }}>
          <MemoryRouter>
            <List programType={programType}/>
          </MemoryRouter>
        </ListContext.Provider>
    )
}

describe('List', () => {
  it('renders the List component', () => {
    const list = render(testSetup('success', '', {total: 0, entries: []}, 'movie'));
    expect(list).toMatchSnapshot();
  })

  it('renders the List component WITH values', () => {
    const list = render(testSetup('success', '', {total: 0, entries: [{
        description: 'test',
        images: {
            "Poster Art": {
                height: 1,
                url: '',
                width: 1,
            }
        },
        programType: 'movie',
        releaseYear: 1,
        title: 'abc'
    }]}, 'movie'));
    expect(list).toMatchSnapshot();
  })

  it('renders the List component WHEN error', () => {
    const list = render(testSetup('error', 'some error', {total: 0, entries: []}, 'movie'));
    expect(list).toMatchSnapshot();
  })

  it('renders the List component WHEN pending', () => {
    const list = render(testSetup('pending', '', {total: 0, entries: []}, 'movie'));
    expect(list).toMatchSnapshot();
  })
})