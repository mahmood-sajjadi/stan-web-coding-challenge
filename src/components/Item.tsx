import { useMemo } from "react";

type Props = {
    children?: React.ReactNode,
    posterArtUrl: string,
    title: string;
    wrapperStyle?: React.CSSProperties;
    posterStyle?: React.CSSProperties;
}

const itemStyleBase = {
    width: '100px',
    height: '200px',
    margin: '0 auto',
}

const posterStyleBase = {
    width: '100%',
    height: '150px',
}

const titleStyle = {
    fontSize: '10px',
}

export function Item(props: Props) {
    const { posterArtUrl, title, wrapperStyle, posterStyle, children } = props;

    const itemStyle = useMemo(() => ({
        ...itemStyleBase,
        ...wrapperStyle,
    }), [wrapperStyle]);

    const imageStyle = useMemo(() => ({
        ...posterStyleBase,
        backgroundImage: `url(${posterArtUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        ...posterStyle,
    }), [posterArtUrl, posterStyle]);

    return (
        <div style={itemStyle}>
            <div style={imageStyle} aria-description={title}>
                {children}
            </div>
            <span style={titleStyle}>{title}</span>
        </div>
    )
}