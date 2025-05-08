import { render, screen } from '@testing-library/react'
import {Item} from './Item'

describe('Item', () => {
  it('renders the Item component', async () => {
    const content = 'test content';
    const item = render(<Item title='test title' posterArtUrl=''>{content}</Item>);
    const contentResult = await screen.findByText(content);
    expect(item).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })
})