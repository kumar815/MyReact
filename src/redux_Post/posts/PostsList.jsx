import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import { selectAllUsers } from "../users/userSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => ( // Fixed map function syntax
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content ? post.content.substring(0, 100) : ""}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;




/*import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectAllPosts } from "./PostSlice";
import postAuthor from "./PostAuthor";

const postsList = () =>{
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post =>(
        <article key = {post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <postAuthor userId ={post.userId}/>
            </p>
        </article>
    ))
    return(
        <section>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    )
}
export default postsList;
*/