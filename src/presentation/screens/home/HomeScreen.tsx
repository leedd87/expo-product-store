import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';

export const HomeScreen = () => {
  const { logOut } = useAuthStore();

  getProductsByPage(0);

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">HOME</Text>
      <Button accessoryLeft={<Icon name="log-out-outline" />} onPress={logOut}>
        Cerrar sesion
      </Button>
    </Layout>
  );
};
