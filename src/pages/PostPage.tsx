import { useParams, Link, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const PostPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const post = posts.find(post => post.id === id)
  
  useEffect(() => {
    if (!post) {
      navigate('/404', { replace: true })
    }
  }, [post, navigate])
  
  if (!post) return null
  
  return (
    <div>
      <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block">
        ← Back to Posts
      </Link>
      
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      
      <h1>{post.title}</h1>
      
      <div className="text-gray-600 mb-8">
        {post.date} • {post.author}
      </div>
      
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default PostPage 