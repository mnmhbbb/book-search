import React from 'react';
import { Route, Switch } from 'react-router';
import Home from 'pages/Home';
import PostForm from 'pages/PostForm';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={PostForm} />
    </Switch>
  );
}

export default App;
