import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import {Home} from './Home'
import { ListContext, type Status } from '../context/ListContext'
import type { ListResponse } from '../services/type'

function testSetup(status: Status, error: string, result: ListResponse) {
    
    return (
        <ListContext.Provider value={{
            status,
            error,
            result,
        }}>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </ListContext.Provider>
    )
}

describe('Home', () => {
  it('renders the Home component', () => {
    const home = render(testSetup('success', '', {total: 0, entries: []}));
    expect(home).toMatchSnapshot();
  })

  it('renders the Home component WHEN error', () => {
    const home = render(testSetup('error', 'some error', {total: 0, entries: []}));
    expect(home).toMatchSnapshot();
  })

  it('renders the Home component WHEN pending', () => {
    const home = render(testSetup('pending', '', {total: 0, entries: []}));
    expect(home).toMatchSnapshot();
  })
})