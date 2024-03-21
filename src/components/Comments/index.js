import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
// import {Date} from 'date-fns'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      backgroundClassName:
        initialContainerBackgroundClassNames[Math.ceil(Math.random() * 7)],
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  updateName = event => {
    this.setState({name: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteCommentItem = id => {
    const {commentsList} = this.state
    const filterCommentList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filterCommentList})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const commentsCount = commentsList.length
    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <div className="content-container">
          <div className="form-container">
            <form className="content-form-container" onSubmit={this.addComment}>
              <p className="form-sub-title">
                Say something about 4.0 technologies
              </p>
              <input
                className="input-box"
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={this.updateName}
              />
              <textarea
                className="input-box"
                rows="5"
                value={comment}
                placeholder="Your Comment"
                onChange={this.updateComment}
              >
                Your Comment
              </textarea>
              <button className="submit-btn" type="submit">
                Add Comment
              </button>
            </form>
            <img
              className="content-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
        </div>
        <div className="comments-container">
          <div className="comments-header">
            <p className="comment-count">{commentsCount}</p>
            <h1 className="comment-title">Comments</h1>
          </div>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentItem={eachComment}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
                toggleIsLiked={this.toggleIsLiked}
                deleteCommentItem={this.deleteCommentItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
