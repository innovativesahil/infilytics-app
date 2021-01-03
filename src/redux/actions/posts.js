export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

const getPosts = posts => {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};

const getPost = post => {
  return {
    type: FETCH_POST,
    payload: post
  };
};

const getComments = comments => {
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      dispatch(getPosts(posts));
    });
};

export const fetchFullPost = postId => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => dispatch(getPost(post)));
};

export const fetchComments = postId => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => dispatch(getComments(comments)));
};
