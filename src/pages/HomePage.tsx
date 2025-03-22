import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const HomePage = () => {
  // Get the latest 2 posts for featured section
  const featuredPosts = posts.slice(0, 2)
  
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to Simple Blog</h1>
        <p className="text-lg text-gray-700 mb-6">
          A minimalist blog template built with React, Vite, and Tailwind CSS.
        </p>
        <Link 
          to="/blog" 
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Read All Posts
        </Link>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.imageUrl && (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage 