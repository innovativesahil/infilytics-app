import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";
import { Link } from "react-router-dom";

export default function Posts() {
  const posts = useSelector(state => state.posts.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  });

  const postItems = posts?.map(post => (
    <div className="card m-2" key={post.id}>
      <div className="card-body">
        <Link to={`/${post.id}`}>
          <h3 className="card-title">{post.title}</h3>
        </Link>
        {post.body}
      </div>
    </div>
  ));

  return <div>{postItems}</div>;
}
