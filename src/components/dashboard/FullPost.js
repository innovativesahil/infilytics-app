import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFullPost } from "../../redux/actions/posts";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Header from "./Header";

export default function FullPost() {
  const dispatch = useDispatch();

  const post = useSelector(state => state.posts.currentPost);

  const { postId } = useParams();
  useEffect(() => {
    dispatch(fetchFullPost(postId));
  });

  return (
    <>
      <Header />
      <div className="container p-2 ">
        <div className=" jumbotron p-3" key={post?.id}>
          <h3 className="display-4">{post?.title}</h3>
          <p>{post?.body}</p>
        </div>
        <hr></hr>
        <h4 className="text-center">Comments</h4>
        <Comments postId={postId} />
      </div>
    </>
  );
}
