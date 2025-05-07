import { Link } from "react-router-dom";
import { Item } from "../components/Item";
import { programTypesList } from "../config";
import { List as ListWrapper } from "../components/List";
import { useContext, useMemo } from "react";
import { ListContext } from "../context/ListContext";

const popularTitleStyle = {
    color: 'black',
}

const posterStyle = {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: '150px',
    fontWeight: 'bold',
    fontSize: '25px',
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
                >
                    {programType.title}
                </Item>
            </Link>
        ));
    }, [])
    switch(list.status) {
        case 'pending':
            return 'loading';
        case 'error':
            // potentially we can use list.error as well
            return 'Error';
        case 'success':
            return (
                <ListWrapper style={listStyle}>
                {
                    popularTitles
                }
                </ListWrapper>
            )
    }
}