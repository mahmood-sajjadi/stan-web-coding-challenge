import React from 'react';
import type { ListResponse } from '../services/type';

export type Status = 'pending' | 'success' | 'error'

export type ListContextType = {
    status: Status,
    error: string,
    result: ListResponse | undefined,
}

export const ListContext = React.createContext<ListContextType>({
    status: 'pending',
    error: '',
    result: undefined,
});