import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/products/get-products-by-page';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { MainLayout } from '../../layouts/MainLayout';
import { FullScreenLoader } from '../../components/ui/FullScreenLoader';
import { ProductList } from '../../components/products/ProductList';
import { FAB } from '../../components/ui/FAB';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/MainStackNavigator';

export const HomeScreen = () => {
  const { logOut } = useAuthStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // const { isLoading, data: products = [] } = useQuery({
  //   queryKey: ['products', 'infinite'],
  //   staleTime: 1000 * 60 * 60,
  //   queryFn: () => getProductsByPage(0),
  // });

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    queryFn: async (params) => await getProductsByPage(params.pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length,
  });

  return (
    <>
      <MainLayout
        title="TesloShop - Products"
        subTitle="Aplicacion administrativa"
      >
        {isLoading ? (
          <FullScreenLoader />
        ) : (
          <>
            <Button onPress={logOut} style={{ marginHorizontal: 30 }}>
              LOG OUT
            </Button>
            <ProductList
              fetchNextPage={fetchNextPage}
              products={data?.pages.flat() ?? []}
            />
          </>
        )}
      </MainLayout>
      <FAB
        iconName="plus-outline"
        onPress={() => navigation.navigate('Product', { productId: 'new' })}
        style={{ position: 'absolute', bottom: 30, right: 20 }}
      />
    </>
  );
};
