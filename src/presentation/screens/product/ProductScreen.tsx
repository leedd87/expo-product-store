import React, { useRef } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { Text } from '@ui-kitten/components';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from '@react-navigation/native';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Product'> {}

export const ProductScreen = ({ route }: Props) => {
  const productIdRef = useRef(route.params.productId);

  //useQuery
  //useMutation

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  if (!product) {
    return <MainLayout title="Cargando" />;
  }

  return (
    <MainLayout title={product.title} subTitle={`Precio: ${product.price}`}>
      <Text>Hola mundo</Text>
    </MainLayout>
  );
};
