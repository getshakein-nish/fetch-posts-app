import React from 'react'

const Posts = (props) => {
    const {title,body} = props;

  return (
    <div className='post-card'>
      <h3> {title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Posts
