import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'auth/isLogInState',
  default: false,
});

export const tokenState = atom({
  key: 'auth/tokenState',
  default: null,
});

// export const logUserIn = async (token) => {
//   await AsyncStorage.setItem(TOKEN, token);
//   isLoggedInVar(true);
//   tokenVar(token);
// };

// export const logUserOut = async () => {
//   await AsyncStorage.removeItem(TOKEN);
//   isLoggedInVar(false);
//   tokenVar(null);
// };
