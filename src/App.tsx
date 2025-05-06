import React, { useMemo } from 'react';
import './App.css'
import { AppRoutes } from "./routes/AppRoutes";
import { ApiServiceContext } from './context/ApiServiceContext';
import { apiServiceFactory } from './services/apiService';

function App() {

  const apiService = useMemo(() => apiServiceFactory({
    //later we can get base url from .env file
    baseUrl: '/api/'
  }), []);

  return (
    <ApiServiceContext.Provider value={apiService}>
      <AppRoutes />
    </ApiServiceContext.Provider>
  )
}

export default App;
