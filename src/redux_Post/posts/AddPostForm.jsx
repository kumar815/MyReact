// AddPostForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { PostAdded } from './PostSlice';
import { selectAllUsers } from '../users/userSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        ({
          title: title,
          content: content,
          userId: userId,
        })
      );
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = title !== '' && content !== '';

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;


/*import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {nanoid} from "reduxjs/toolkit";

import { postAdded } from "./PostSlice";
import { selectAllUsers } from "./PostSlice";

const AddPostForm = () => {
    
    const useDispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')

    const user = useSelector(selectAllUsers)

    const OnTitleChanged = e => setTitle(e.terget.value)
    const onContentChanged = e => setContent(e.terget.value)
    const onAuthorChanged = e => setUserId(e.terget.value)

    const onSavePostClicked = () =>{

        if(title && content){
            dispatch(
                postAdded(title,content,userId)

            )
            setTitle('')
            setContent('')
        }
    }

    const userOptions = user.map(user =>{
        <option key = {user.id} value={user.id}>
            {user.name}
        </option>
    })

    return (
        <section>
            <h2> add a new post</h2>
            <form>
                <label htmlfor="postTitle">Post Title</label>
                <input 
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}/>

                <label htmlfor ="postAuthor">Author:</label>
                <select id ="postAuthor" value={userId} onchange ={onAuthorChanged}>
                    <option value="">
                    </option>
                    {userOptions}
                </select>

                <label htmlfor ="postContent">Content:</label>
                <textarea 
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}/>

                <button type="button"
                onClick={onSavePostClicked}
                disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    );
};
export default AddPostForm;
*/