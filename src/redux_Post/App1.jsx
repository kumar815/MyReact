import React from 'react';
import postsList from './post/postsList';
import store from './store';
import OneCardForm from './components/OneCardForm';
import PostsTable from './components/PostsTable';
import AddPostForm from './post/AddPostForm';

const App1 = () {
  return(
    <main className='App'>
    <AddPostForm/>
    <postsList/>
    </main>
  )
}
  
export default App1;