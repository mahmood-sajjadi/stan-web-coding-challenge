import { Footer } from "../components/Footer";
import { Header } from "../components/Header"

type Props = {
    children?: React.ReactNode,
    header?: React.ReactNode,
}

const containerStyle = {
    padding: '10px 100px',
}

export function Default(props: Props) {
    const { header, children} = props;
    return (
        <>
            <Header>{header}</Header>
            <main style={containerStyle}>{children}</main>
            <Footer />
        </>
    )
}