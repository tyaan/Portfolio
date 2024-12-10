import { createRoot } from 'react-dom/client'

import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />,
  )
})
