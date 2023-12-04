import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice'; // Updated import

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers); // Corrected selector name
  const author = users.find(user => user.id === userId);
  return <span>{author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
