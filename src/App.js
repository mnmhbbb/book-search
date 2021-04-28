import NavBar from 'components/NavBar';
import Home from 'pages/Home';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
