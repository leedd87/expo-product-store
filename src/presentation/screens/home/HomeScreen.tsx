import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">HOME</Text>
      <Button accessoryLeft={<Icon name="home" />}>Login with Facebook</Button>
    </Layout>
  );
};
