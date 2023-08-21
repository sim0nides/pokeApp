import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import PokeDetail from './views/PokeDetail'
import PokeList from './views/PokeList'

const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PokeList />
      },
      {
        path: ':id',
        element: <PokeDetail />
      }
    ]
  }
])

export default rootRouter
