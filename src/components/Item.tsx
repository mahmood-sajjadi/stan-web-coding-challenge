import { useMemo } from "react";

type Props = {
    children?: React.ReactNode;
    className?: string;
    posterArtUrl: string;
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
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    textAlign: 'center',
}

const titleStyle = {
    fontSize: '10px',
}

export function Item(props: Props) {
    const { posterArtUrl, title, wrapperStyle, posterStyle, className, children } = props;

    const itemStyle = useMemo(() => ({
        ...itemStyleBase,
        ...wrapperStyle,
    }), [wrapperStyle]);

    const imageStyle = useMemo(() => ({
        ...posterStyleBase,
        backgroundImage: `url(${posterArtUrl})`,
        ...posterStyle,
    }), [posterArtUrl, posterStyle]);

    return (
        <div style={itemStyle}>
            <div style={imageStyle} className={className} aria-description={title}>
                {children}
            </div>
            <span style={titleStyle}>{title}</span>
        </div>
    )
}