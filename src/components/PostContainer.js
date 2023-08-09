import { useState,useEffect } from 'react'
import Posts from './Posts';

const PostContainer = ({id}) => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
         
            try {
                const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data=await response.json();
                console.log(data);
                id===''?setPosts(data):setPosts([data]);
            } catch (error) {
                console.log(error)
            }
        }
        getPosts();

    },[id]);



  return (
    <div className='post-container'>
      {posts.map(post=><Posts title={post.title} body={post.body} key={post.id} />)};
    </div>
  )
}

export default PostContainer
