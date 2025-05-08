import { render } from '@testing-library/react'
import {List} from './List'

describe('List', () => {
  it('renders the List component', () => {
    const list = render(<List>test content</List>);
    expect(list).toMatchSnapshot();
  })
})