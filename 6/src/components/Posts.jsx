import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  // BEGIN (write your solution here)
  const postIds = useSelector((state) => state.posts.postIds);
  const posts = useSelector((state) => state.posts.entities);

  return (
    <div>
      {postIds.map(postId => (
        <Post key={postId} post={posts[postId]} />
      ))}
    </div>
  );
  // END
};

export default Posts;
