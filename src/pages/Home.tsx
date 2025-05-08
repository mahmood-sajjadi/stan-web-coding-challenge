import { Link } from "react-router-dom";
import { Item } from "../components/Item";
import { programTypesList } from "../config";
import { List as ListWrapper } from "../components/List";
import { useContext, useMemo } from "react";
import { ListContext } from "../context/ListContext";
import { Loading } from "../components/Loading";

const popularTitleStyle = {
    color: 'black',
}

const posterStyle = {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: '150px',
    fontWeight: 'bold',
    fontSize: '25px',
    textTransform: 'uppercase',
    backgroundSize: 'cover',
}

const linkStyle = {
    textDecoration: 'none',
    width: '100px',
}

const listStyle = {
    gridTemplateColumns: 'repeat(auto-fit, 100px)',
}

export function Home() {
    const list = useContext(ListContext);

    const popularTitles = useMemo(() => {
        return programTypesList.map(programType => (
            <Link to={programType.uri} style={linkStyle} key={programType.type}>
                <Item
                    posterArtUrl={programType.posterArtUrl}
                    title={programType.description}
                    wrapperStyle={popularTitleStyle}
                    posterStyle={posterStyle}
                    className="glass"
                >
                    {programType.title}
                </Item>
            </Link>
        ));
    }, []);

    return (
        <Loading status={list.status}>
            <ListWrapper style={listStyle}>
            {
                popularTitles
            }
            </ListWrapper>
        </Loading>
    )
}