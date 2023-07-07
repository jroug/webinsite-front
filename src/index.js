import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

let __uri = process.env.REACT_APP_GRAPHQL_URL;
// console.log(process.env);

const client = new ApolloClient({
  uri: __uri,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
// test
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
