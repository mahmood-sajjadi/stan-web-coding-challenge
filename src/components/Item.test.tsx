import { render } from '@testing-library/react'
import {Item} from './Item'

describe('Item', () => {
  it('renders the Item component', () => {
    const item = render(<Item title='test title' posterArtUrl=''>test content</Item>);
    expect(item).toMatchSnapshot();
  })
})