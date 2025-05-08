import { render } from '@testing-library/react'
import {Loading} from './Loading'

describe('Loading', () => {
  it('renders the Loading component', () => {
    const loading = render(<Loading status={'success'}>test content</Loading>);
    expect(loading).toMatchSnapshot();
  })

  it('renders the Loading component WHEN error', () => {
    const loading = render(<Loading status={'error'}>test content</Loading>);
    expect(loading).toMatchSnapshot();
  })

  it('renders the Loading component WHEN pending', () => {
    const loading = render(<Loading status={'pending'}>test content</Loading>);
    expect(loading).toMatchSnapshot();
  })
})