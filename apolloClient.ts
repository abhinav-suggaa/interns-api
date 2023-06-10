import { ApolloClient,InMemoryCache } from "@apollo/client";

const hasuraConfig = {
  endpoint: 'https://abhinav-suggaa.hasura.app/v1/graphql', 
  secretKey: 'y24JM0OSqSxtXqmyHMZjVLugCSB9UbVY3sRrVROTuDtHWP8lYf9TlCqzHn7h8xVh', 
};

const client = new ApolloClient({
    uri: hasuraConfig.endpoint,
    headers: {
        'x-hasura-admin-secret': hasuraConfig.secretKey,
    },
    cache: new InMemoryCache(),
});

export default client;