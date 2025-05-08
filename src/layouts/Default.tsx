import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import { footerMenu, socialItems, storeItems } from "../config";

type Props = {
    children?: React.ReactNode;
    header?: React.ReactNode;
}

const PagePaddingStyle = {
    paddingRight: '100px',
    paddingLeft: '100px',
}

const headerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '10',
}

const mainStyle = {
    ...PagePaddingStyle,
    marginTop: '100px',
    paddingTop: '20px',
    paddingBottom: '200px',
}

const headerMainStyle = {
    ...PagePaddingStyle,
    width: 'calc(100% - 200px)',
    color: 'white',
    fontSize: '25px',
}

const headerPageStyle = {
    ...PagePaddingStyle,
    width: 'calc(100% - 200px)',
    color: 'white',
    fontSize: '25px',
}

const footerStyle = {
    ...PagePaddingStyle,
    position: 'absolute',
    width: 'calc(100% - 200px)',
    height: '200px',
    bottom: '0',
}

export function Default(props: Props) {
    const { header, children} = props;

    return (
        <>
            <Header headerStyle={headerStyle} headerMainStyle={headerMainStyle} headerPageStyle={headerPageStyle}>{header}</Header>
            <main style={mainStyle}>{children}</main>
            <Footer footerStyle={footerStyle}
                copyright="Copyright &copy; 2016 DEMO Streaming, All Right Reserved."
                menuItems={footerMenu}
                socials={socialItems}
                stores={storeItems}    
            />
        </>
    )
}