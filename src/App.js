import React from 'react';
import './App.css';
import Component from './components/Component';
import SimpleState from './SimpleState';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Users from './components/User';
import Effetc from './components/Effet';
import ChildToParent from './components/ChildToParent';
import UILibrary from './components/UILibrary';
import Graphs from './components/Graphs';
import GraphApi from './components/GraphApi';
import UIharika from './components/UIharika';
import Graph from './components/Graph';
import ContextComponent from './ContextApi/ContextComponent';
import store from '../src/redux/store';
import ReduxComponents from './redux/ReduxComponents';
import { Provider } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import Chart from './MUI Design/Charts/Chart';
import LabelStyling from './MUI Design/Charts/LabelStyling';
//import App1 from './redux-NPDS/App1';
//import { createPost } from './redux-NPDS/actions/posts';
//import React from 'react';
//import postsList from './redux_Post/posts/PostsList';
//import store1 from './store1';
//import OneCardForm from './components/OneCardForm';
//import PostsTable from './components/PostsTable';
import AddPostForm from './redux_Post/posts/AddPostForm';

function App  () {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Component user={{ name: "Anand", email: "anandkumarinfo3@gmail.com", role: "dev" }} />} />
          <Route path="/state" element={<SimpleState />} />
          <Route path="/form" element={<Form />} />
          <Route path="/users" element={<Users />} />
          <Route path="/effect" element={<Effetc />} />
          <Route path="/childtoparent" element={<ChildToParent />} />
          <Route path="/ui-library" element={<UILibrary />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/graph-api" element={<GraphApi />} />
          <Route path="/ui-harika" element={<UIharika />} />
          <Route path="/Graph" element={<Graph />} />
          <Route path="context-component" element={<ContextComponent />} />
          <Route path="reduxcomponents" element={<ReduxComponents />} />
          <Route path="datagrid" element={<DataGrid />} />
          <Route path="chart" element={<Chart/>} />
          <Route path="labalstyling" element={<LabelStyling/>} />
          <Route path="addpostform" element={<AddPostForm/>} />
          <Route path="postslist" element={<postsList/>} />
          {/*<Route path="app1" element={<App1/>} />*/}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;