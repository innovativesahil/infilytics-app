import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/actions/posts";

export default function Comments({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.posts.comments);

  useEffect(() => {
    dispatch(fetchComments(postId));
  });

  return (
    <div>
      {comments.map(comment => (
        <div>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
