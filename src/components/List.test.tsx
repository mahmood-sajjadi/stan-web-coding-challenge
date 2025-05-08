import { render, screen } from '@testing-library/react'
import {List} from './List'

describe('List', () => {
  it('renders the List component', async () => {
    const content = 'test content';
    const list = render(<List>{content}</List>);
    const contentResult = await screen.findByText(content);
    expect(list).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })
})