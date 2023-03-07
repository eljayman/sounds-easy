import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Login from './components/Login';
import Landing from './components/Landing';
// import Dashboard from './components/Dashboard';
// import Library from './components/Library';
// import Soundboard from './components/Soundboard';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/dashboard"
            element={
              <Dashboard
                user={user}
                handleLogout={handleLogout}
                handleAddToLibrary={handleAddToLibrary}
              />
            }
          /> */}
          {/* <Route
            path="/library"
            element={<Library user={user} selectedSounds={selectedSounds} />}
          /> */}
          {/* <Route
            path="/soundboard"
            element={
              <Soundboard sounds={sounds} onSoundClick={handleAddToLibrary} />
            }
          /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
