import { atom } from 'recoil';

export const isLogInState = atom({
  key: 'auth/isLogInState',
  default: false,
});
