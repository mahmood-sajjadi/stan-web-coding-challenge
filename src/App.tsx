import { useEffect, useMemo, useState } from 'react';
import './App.css'
import { AppRoutes } from "./routes/AppRoutes";
import { ListContext, type ListContextType, type Status } from './context/ListContext';
import { apiServiceFactory } from './services/apiService';
import type { ListResponse } from './services/type';
import { getList } from './services/listService';

function App() {

  const apiService = useMemo(() => apiServiceFactory({
    //later we can get base url from .env file or another way.
    baseUrl: '/api/'
  }), []);

  const [list, setList] = useState<ListResponse | undefined>(undefined);
  const [listError, setListError] = useState<string>('');
  const [listStatus, setListStatus] = useState<Status>('pending');

  useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      getList(apiService, {
          signal
      }).then((result) => {
        setListStatus('success');
        setList(result);
      }).catch(err => {
        setListStatus('error');
        setListError(err);
      });

      return () => {
          controller.abort();
      }
  }, [apiService]);

  // in this case, it is an unnecessary over optimization, it is not required
  // should be avoided, just added due to demonstrate how it could be done when
  // needed.
  const listContextValue = useMemo<ListContextType>(() => ({
    error: listError,
    result: list,
    status: listStatus,
  }), [list, listError, listStatus])

  return (
    <ListContext.Provider value={listContextValue}>
      <AppRoutes />
    </ListContext.Provider>
  )
}

export default App;
