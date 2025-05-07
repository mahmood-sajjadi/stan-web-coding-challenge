import { useMemo } from "react";

type Props = {
    children?: React.ReactNode,
    style?: React.CSSProperties;
}

const listWrapperStyleBase = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gridGap: '5px',
  }

export function List(props: Props) {
    const { style, children } = props;

    const listWrapperStyle = useMemo(() => ({
        ...listWrapperStyleBase,
        ...style,
    }), [style]);

    return (<div style={listWrapperStyle}>{children}</div>);
}