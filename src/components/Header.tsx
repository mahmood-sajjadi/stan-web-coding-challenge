import { useMemo } from "react";
import { Button } from "./Button";

type Props = {
    children?: React.ReactNode;
    headerStyle?: React.CSSProperties;
    headerMainStyle?: React.CSSProperties;
    headerPageStyle?: React.CSSProperties;
}

const headerStyleBase = {
    display: 'box',
    width: '100%',
}

const headerMainStyleBase = {
    display: 'box',
    width: '100%',
    height: '30px',
    paddingTop: '10px',
    paddingBottom: '10px',
    background: 'linear-gradient(0deg,rgb(46, 149, 250) 0%, rgb(18, 100, 246) 100%)',
    boxShadow: '0px 3px 3px rgb(45, 45, 45)',
    position: 'relative',
    zIndex: '10',
}

const headerCTAHolderStyle = {
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '10px',
    float: 'right'
}

const loginStyle = {
    marginRight: '10px',
}

const headerPageStyleBase = {
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'box',
    width: '100%',
    height: '30px',
    background: 'rgb(65, 65, 65)'
}

export function Header(props: Props) {
    const { headerStyle, headerMainStyle, headerPageStyle, children } = props;

    const headerStyleCalculated = useMemo(() => ({
        ...headerStyleBase,
        ...headerStyle,
    }), [headerStyle]);

    const headerMainStyleCalculated = useMemo(() => ({
        ...headerMainStyleBase,
        ...headerMainStyle,
    }), [headerMainStyle]);

    const headerPageStyleCalculated = useMemo(() => ({
        ...headerPageStyleBase,
        ...headerPageStyle,
    }), [headerPageStyle]);

    return (
        <header style={headerStyleCalculated}>
            <div style={headerMainStyleCalculated}>
                DEMO Streaming
                <div style={headerCTAHolderStyle}>
                    <span style={loginStyle}>Log in</span>
                    <Button>Start your free trial</Button>
                </div>
            </div>
            <div style={headerPageStyleCalculated}>
                {children}
            </div>
        </header>
    );
}