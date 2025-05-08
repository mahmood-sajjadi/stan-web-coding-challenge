import { useMemo } from "react";

type Props = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const buttonStyleBase = {
    color: 'white',
    background: 'linear-gradient(0deg,rgb(68, 68, 68) 0%, rgb(51, 51, 51) 100%)',
    display: 'inline',
    padding: '10px',
}

export function Button (props: Props) {
    const {children, style} = props;

    const buttonStyle = useMemo(() => ({
        ...buttonStyleBase,
        ...style,
    }), [style]);

    return (
        <div style={buttonStyle}>
            {children}
        </div>
    )
}