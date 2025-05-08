import type { Status } from "../context/ListContext";

type Props = {
    children?: React.ReactNode,
    status: Status,
}

export function Loading(props: Props) {
    const { children, status } = props;
    switch(status) {
        case 'pending':
            return 'Loading...';
        case 'error':
            // potentially we can use error object as well (needs to be added to props)
            return 'Oops, something went wrong...';
        case 'success':
            return children
    }
}