import { render } from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
  it('renders the Button component', () => {
    const button = render(<Button>test</Button>);
    expect(button).toMatchSnapshot();
  })
})