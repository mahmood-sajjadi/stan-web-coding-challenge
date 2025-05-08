import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import {Default} from './Default'

describe('Default', () => {
  it('renders the Default component', () => {
    const defaultLayout = render(
      <MemoryRouter>
        <Default>test content</Default>
      </MemoryRouter>
    );
    expect(defaultLayout).toMatchSnapshot();
  })
})