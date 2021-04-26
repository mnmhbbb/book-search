import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Home from 'pages/Home';
import PostForm from 'pages/PostForm';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={PostForm} />
      </Switch>
    </Suspense>
  );
}

export default App;
