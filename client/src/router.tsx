import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom'

import Home from './Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
    </Route>,
  ),
)

export default router
