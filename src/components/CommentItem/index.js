// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentItem, toggleIsLiked, deleteCommentItem} = props
  const {id, name, comment, date, isLiked, backgroundClassName} = commentItem
  const postedTime = formatDistanceToNow(date)
  const likeImage = isLiked ? (
    <img
      className="like-img"
      src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      alt="like"
    />
  ) : (
    <img
      className="like-img"
      src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
      alt="like"
    />
  )
  const deleteImg = (
    <img
      className="delete-img"
      src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
      alt="delete"
    />
  )
  const updateLikes = () => {
    toggleIsLiked(id)
  }
  const onClickDeleteButton = () => {
    deleteCommentItem(id)
  }
  return (
    <li className="comment-item">
      <div className="top">
        <h1 className={`profile ${backgroundClassName}`}>{name[0]}</h1>
        <div className="comment-info">
          <p className="name">
            {name} <span className="time">{postedTime}</span>
          </p>
          <p className="name">{comment}</p>
        </div>
      </div>
      <div className="bottom">
        <button
          className="btn"
          data-testid="like"
          onClick={updateLikes}
          type="button"
        >
          {likeImage}
        </button>
        <button
          className="btn"
          data-testid="delete"
          type="button"
          onClick={onClickDeleteButton}
        >
          {deleteImg}
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
