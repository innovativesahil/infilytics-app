import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";

export default function Posts() {
  const posts = useSelector(state => state.posts.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const postItems = posts?.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h3>This is a post item</h3>
      {postItems}
    </div>
  );
}
