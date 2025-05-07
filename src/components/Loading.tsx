import type { Status } from "../context/ListContext";

type Props = {
    children?: React.ReactNode,
    status: Status,
}

export function Loading(props: Props) {
    const { children, status } = props;
    switch(status) {
        case 'pending':
            return 'loading';
        case 'error':
            // potentially we can use error object as well (needs to be added to props)
            return 'Error';
        case 'success':
            return children
    }
}