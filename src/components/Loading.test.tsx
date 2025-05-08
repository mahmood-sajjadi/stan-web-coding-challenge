import { render, screen } from '@testing-library/react'
import {Loading} from './Loading'

describe('Loading', () => {
  it('renders the Loading component', async () => {
    const content = 'test content';
    const loading = render(<Loading status={'success'}>{content}</Loading>);
    const contentResult = await screen.findByText(content);
    expect(loading).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })

  it('renders the Loading component WHEN error', async () => {
    const loading = render(<Loading status={'error'}>test content</Loading>);
    const contentResult = await screen.findByText('Oops, something went wrong...');
    expect(loading).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })

  it('renders the Loading component WHEN pending', async () => {
    const loading = render(<Loading status={'pending'}>test content</Loading>);
    const contentResult = await screen.findByText('Loading...');
    expect(loading).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })
})