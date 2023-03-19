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

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';
import { Library } from './pages/Library';
import { Soundboard } from './pages/Soundboard';

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

export function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main className="text-gray-400 bg-gray-900 body-font h-screen justify-between">
          <Header />
          <div className="flex-grow bg-gray-900">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/library" element={<Library />} />
              <Route path="/soundboard" element={<Soundboard />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </Router>
    </ApolloProvider>
  );
}
