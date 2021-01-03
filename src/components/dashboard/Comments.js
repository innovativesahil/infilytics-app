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
      <ul class="list-group">
        {comments.map(comment => (
          <li key={comment.id} className="list-group-item">
            {/* <p>{comment.name}</p> */}
            <p>
              <strong>{comment.email}</strong>
            </p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
