import { Button } from "./Button";

type Props = {
    children?: React.ReactNode,
}

const headerStyle = {
    display: 'box',
    width: '100%',
}

const headerMainStyle = {
    display: 'box',
    width: '100%',
    height: '50px',
    background: 'linear-gradient(0deg,rgb(46, 149, 250) 0%, rgb(18, 100, 246) 100%)',
    boxShadow: '0px 3px 3px rgb(45, 45, 45)',
    position: 'relative',
    zIndex: '1',
}

const headerPageStyle = {
    display: 'box',
    width: '100%',
    height: '50px',
    background: 'rgb(65, 65, 65)'
}

export function Header(props: Props) {
    const { children } = props;
    return (
        <header style={headerStyle}>
            <div style={headerMainStyle}>
                DEMO Streaming
                <span>Log in</span>
                <Button>Start your free trial</Button>
            </div>
            <div style={headerPageStyle}>
                {children}
            </div>
        </header>
    );
}