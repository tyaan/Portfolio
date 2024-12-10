import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom'

import Home from './Home'
import Projects from './Projects'
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      
      
    </>
  ),
)

export default router
