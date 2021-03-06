
import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1,  backgroundColor: '#312e38' }} />
    </>
  );
};

export default App;
