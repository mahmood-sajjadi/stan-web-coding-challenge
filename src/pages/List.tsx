import { useContext, useMemo } from "react";
import { getList } from "../helper/getList"
import { ListContext } from "../context/ListContext";
import type { ProgramType } from "../config";
import { Item } from "../components/Item";
import { List as ListWrapper } from "../components/List";

export function List(props: { programType: ProgramType }) {
    const { programType } = props;
    const list = useContext(ListContext);

    const moviesComponents = useMemo(() => {
        if (!list.result) {
            return null;
        }
        return getList(list.result, programType).map((entry) => (
            <Item key={entry.title}
                posterArtUrl={entry.images["Poster Art"].url}
                title={entry.title}
            />
        ));
    }, [list.result, programType]);

    switch(list.status) {
        case 'pending':
            return 'loading';
        case 'error':
            // potentially we can use list.error as well
            return 'Error';
        case 'success':
            return (
                <ListWrapper>
                {
                    moviesComponents
                }
                </ListWrapper>
            )
    }
}