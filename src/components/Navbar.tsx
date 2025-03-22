import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-indigo-600">
          Simple Blog
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-indigo-600 transition-colors">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 