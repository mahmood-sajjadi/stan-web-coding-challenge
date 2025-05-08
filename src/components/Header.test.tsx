import { render, screen } from '@testing-library/react'
import {Header} from './Header'

describe('Header', () => {
  it('renders the Header component', async () => {
    const content = 'test header text';
    const header = render(
        <Header>
            {content}
        </Header>
    );
    const contentResult = await screen.findByText(content);
    expect(header).toMatchSnapshot();
    expect(contentResult).toBeTruthy()
  })
})