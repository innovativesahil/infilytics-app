import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFullPost } from "../../redux/actions/posts";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
export default function FullPost() {
  const dispatch = useDispatch();

  const post = useSelector(state => state.posts.currentPost);

  const { postId } = useParams();
  useEffect(() => {
    dispatch(fetchFullPost(postId));
  });

  return (
    <div className="container p-2">
      <div key={post?.id}>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </div>
      <hr></hr>
      <h3>Comments</h3>
      <Comments postId={postId} />
    </div>
  );
}
