// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, author, imageUrl, avatarUrl, topic, title} = eachItem

  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <div className="blog-item-container">
        <img src={imageUrl} alt={title} className="img-size" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="avatar-size" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
