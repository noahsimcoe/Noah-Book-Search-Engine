import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

// creating GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
