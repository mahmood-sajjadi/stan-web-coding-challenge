import { render } from '@testing-library/react'
import {Footer} from './Footer'

describe('Footer', () => {
  it('renders the Footer component', () => {
    const footer = render(
        <Footer
            copyright='copyright'
            menuItems={[{title: 'test'}]}  
            socials={[{images: {normal: '', hover: ''}, title: 'test'}]}
            stores={[{title: 'test', image: ''}]}
        />
    );
    expect(footer).toMatchSnapshot();
  })
})