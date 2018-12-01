import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  LoginContainer, NewEntryContainer, RegisterContainer, EntriesContainer,
} from './Containers';
import './App.css';

const App = ({ token, logout }) => (
  <Router>
    <div className="App">
      {token ? (
        <div>
          <NewEntryContainer />
          <EntriesContainer />
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <RegisterContainer />
          <LoginContainer />
        </div>
      )}
    </div>
  </Router>
);

App.propTypes = {
  token: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
export default App;
