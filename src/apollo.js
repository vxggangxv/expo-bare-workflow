import {
  ApolloClient,
  makeVar,
  InMemoryCache,
  // createHttpLink,
  // split,
} from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');

const TOKEN = 'token';

export const logUserIn = async token => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar(null);
};

const client = new ApolloClient({
  // link: splitLink,
  cache: new InMemoryCache(),
});
export default client;
