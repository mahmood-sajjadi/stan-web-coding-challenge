import { render, screen } from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
  it('renders the Button component', async () => {
    const testContent = 'test';
    const button = render(<Button>{testContent}</Button>);
    const contentResult = await screen.findByText(testContent);
    expect(button).toMatchSnapshot();
    expect(contentResult).toBeTruthy();
  })
})