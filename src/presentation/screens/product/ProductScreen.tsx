import React, { useRef } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  Text,
  useTheme,
} from '@ui-kitten/components';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from '@react-navigation/native';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/MainStackNavigator';
import { FlatList, ScrollView } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { Gender, Size } from '../../../domain/entities/product';
import { CustomIcon } from '../../components/ui/CustomIcon';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];

const genders: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParams, 'Product'> {}

export const ProductScreen = ({ route }: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();
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
      <ScrollView style={{ flex: 1 }}>
        <Layout>
          <FlatList
            data={product.images}
            horizontal
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FadeInImage
                uri={item}
                style={{ width: 300, height: 200, marginHorizontal: 7 }}
              />
            )}
          />
        </Layout>
        {/* formulario */}

        <Layout style={{ marginHorizontal: 10 }}>
          <Input
            label="Titulo"
            value={product.title}
            style={{ marginVertical: 5 }}
          />
          <Input
            label="Slug"
            value={product.slug}
            style={{ marginVertical: 5 }}
          />
          <Input
            label="Descripcion"
            value={product.description}
            multiline
            numberOfLines={5}
            style={{ marginVertical: 5 }}
          />
        </Layout>
        <Layout
          style={{
            marginVertical: 5,
            marginHorizontal: 15,
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <Input
            label="Precio"
            value={product.price.toString()}
            style={{ flex: 1 }}
          />
          <Input
            label="Inventario"
            value={product.stock.toString()}
            style={{ flex: 1 }}
          />
        </Layout>
        <ButtonGroup
          style={{ margin: 2, marginTop: 30, marginHorizontal: 15 }}
          size="small"
          appearance="outline"
        >
          {sizes.map((size) => (
            <Button
              key={size}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-300'] : undefined,
              }}
            >
              {size}
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup
          style={{ margin: 2, marginTop: 30, marginHorizontal: 15 }}
          size="small"
          appearance="outline"
        >
          {genders.map((gender) => (
            <Button
              key={gender}
              style={{
                flex: 1,
                backgroundColor: true ? theme['color-primary-300'] : undefined,
              }}
            >
              {gender}
            </Button>
          ))}
        </ButtonGroup>

        <Button
          onPress={() => console.log('Guardar')}
          accessoryLeft={<CustomIcon name="save-outline" white />}
          style={{ margin: 15 }}
        >
          Guardar
        </Button>
        <Text>{JSON.stringify(product, null, 2)}</Text>
        <Layout style={{ height: 200 }} />
      </ScrollView>
    </MainLayout>
  );
};
