import React from 'react';
import styled from 'styled-components/native';
import { colors } from 'styles/utils';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Main = styled.ImageBackground``;
const GetStarted = styled.TouchableOpacity``;
const LoginLink = styled.Text`
  color: #000;
  font-weight: 500;
  font-size: 30px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  const goToLogIn = () => navigation.navigate('LogIn');

  return (
    <Container>
      <LoginLink>Welcome - Logged In</LoginLink>
      {/* <Main source={require('assets/contents/')}></Main> */}
    </Container>
  );
}
