import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';

import LoginPage from './routes/Login';
import SignupPage from './routes/Signup';
import ForumPage from './routes/Forum';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage token={token} />
        </Route>
        <Route path="/signup">
          <SignupPage token={token} />
        </Route>
        <Route path="/">
          <ForumPage token={token} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
