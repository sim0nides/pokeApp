import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import client from '@/api/apollo-client'
import appTitle from '@/helpers/appTitle'
import store from '@/store'

import rootRouter from './routes'

import './index.css'

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <Helmet>
            <title>{appTitle()}</title>
          </Helmet>
          <RouterProvider router={rootRouter} />
        </HelmetProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default App
