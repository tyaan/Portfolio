import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="container mx-auto bg-red-200 shadow-lg rounded-lg">
        <div className="flex w-full">
          <Link to="/" className="p-5 text-center flex-1 text-lg text-black hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/projects" className="p-5 text-center flex-1 text-lg text-black hover:text-white transition-colors">
            Projects
          </Link>
      </div>
    </nav>
  )
}
