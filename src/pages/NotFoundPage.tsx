import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFoundPage 