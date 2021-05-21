import React, { Suspense } from 'react';
import { Text } from 'react-native';
import { RecoilRoot } from 'recoil';
import App from './App';
import AppErrorBoundary from './components/base/error/AppErrorBoundary';

// TODO: 나중에 로딩중 화면 만들기
export default function Root(props) {
  return (
    <RecoilRoot>
      <AppErrorBoundary>
        <Suspense fallback={<Text>loading...</Text>}>
          <App />
        </Suspense>
      </AppErrorBoundary>
    </RecoilRoot>
  );
}
