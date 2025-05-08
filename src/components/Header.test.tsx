import { render } from '@testing-library/react'
import {Header} from './Header'

describe('Header', () => {
  it('renders the Header component', () => {
    const header = render(
        <Header>
            test header text
        </Header>
    );
    expect(header).toMatchSnapshot();
  })
})