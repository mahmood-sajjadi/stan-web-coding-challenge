import { useContext, useMemo } from "react";
import { getList } from "../helper/getList"
import { ListContext } from "../context/ListContext";
import type { ProgramType } from "../config";
import { Item } from "../components/Item";
import { List as ListWrapper } from "../components/List";
import { Loading } from "../components/Loading";

export function List(props: { programType: ProgramType }) {
    const { programType } = props;
    const list = useContext(ListContext);

    const listComponents = useMemo(() => {
        if (!list.result) {
            return null;
        }
        return getList(list.result, programType).map((entry) => (
            <Item key={entry.title}
                posterArtUrl={entry.images["Poster Art"].url}
                title={entry.title}
                className="glass"
            />
        ));
    }, [list.result, programType]);


    return (
        <Loading status={list.status}>
            <ListWrapper>
            {
                listComponents
            }
            </ListWrapper>
        </Loading>
    );
}