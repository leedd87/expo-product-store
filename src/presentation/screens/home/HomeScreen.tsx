import { View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">HOME</Text>
    </Layout>
  );
};
