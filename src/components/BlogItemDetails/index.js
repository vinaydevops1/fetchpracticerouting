import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItem: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(` https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedItem = {
      author: data.author,
      avatarUrl: data.avatar_url,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      content: data.content,
      id: data.id,
    }

    this.setState({
      blogItem: updatedItem,
      isLoader: false,
    })
  }

  renderBlogItem = () => {
    const {blogItem} = this.state
    const {title, author, avatarUrl, content, imageUrl} = blogItem

    return (
      <div className="item-container">
        <div className="content">
          <h1>{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="avatar-size" />
            <p>{author}</p>
          </div>
          <div className="content-container">
            <img src={imageUrl} alt={title} className="blog-img-size" />
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div>
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
