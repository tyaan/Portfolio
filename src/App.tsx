import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="container mx-auto px-4">
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}