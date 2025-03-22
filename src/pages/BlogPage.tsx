import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const BlogPage = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center">
              {post.imageUrl && (
                <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
              )}
              <div className={post.imageUrl ? "md:w-3/4" : "w-full"}>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
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
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogPage 