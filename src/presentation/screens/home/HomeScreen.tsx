import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';

export const HomeScreen = () => {
  const { logOut } = useAuthStore();

  const { isLoading, data: products = [] } = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    queryFn: () => getProductsByPage(0),
  });

  return (
    <MainLayout
      title="TesloShop - Products"
      subTitle="Aplicacion administrativa"
    >
      <Text>Hola App</Text>
    </MainLayout>
  );
};
