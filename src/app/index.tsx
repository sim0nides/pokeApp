import React from 'react'
import { RouterProvider } from 'react-router-dom'

import rootRouter from './routes'

import './index.css'

const App = () => {
  return <RouterProvider router={rootRouter} />
}

export default App
