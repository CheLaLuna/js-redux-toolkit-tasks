import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  // BEGIN (write your solution here)
  const { ids, entities } = useSelector((state) => state.postsReducer);

  return (
    <div>
      {ids.map((id) => (
        <Post key={id} post={entities[id]} />
      ))}
    </div>
  );
  // END
};

export default Posts;
