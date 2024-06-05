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
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from '@tanstack/react-query';
import { getProductById } from '../../../actions/products/get-product-by-id';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/MainStackNavigator';
import { FlatList, ScrollView } from 'react-native';
import { FadeInImage } from '../../components/ui/FadeInImage';
import { Gender, Product, Size } from '../../../domain/entities/product';
import { CustomIcon } from '../../components/ui/CustomIcon';
import { Formik } from 'formik';
import { updateCreateProduct } from '../../../actions/products/update-create-product';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];

const genders: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParams, 'Product'> {}

export const ProductScreen = ({ route }: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();
  const queryClient = useQueryClient();
  //useMutation

  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  const mutation = useMutation({
    mutationFn: (data: Product) =>
      updateCreateProduct({ ...data, id: productIdRef.current }),
    onSuccess(data: Product) {
      productIdRef.current = data.id;
      queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });
      queryClient.invalidateQueries({ queryKey: ['product', data.id] });
    },
  });

  if (!product) {
    return <MainLayout title="Cargando" />;
  }

  return (
    <Formik
      initialValues={product}
      onSubmit={(values) => mutation.mutate(values)}
    >
      {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
        <MainLayout title={values?.title} subTitle={`Precio: ${values.price}`}>
          <ScrollView style={{ flex: 1 }}>
            <Layout>
              <FlatList
                data={values.images}
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
                style={{ marginVertical: 5 }}
                value={values.title}
                onChangeText={handleChange('title')}
              />
              <Input
                label="Slug"
                style={{ marginVertical: 5 }}
                value={values.slug}
                onChangeText={handleChange('slug')}
              />
              <Input
                label="Descripcion"
                multiline
                numberOfLines={5}
                style={{ marginVertical: 5 }}
                value={values.description}
                onChangeText={handleChange('description')}
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
                style={{ flex: 1 }}
                value={values.price.toString()}
                onChangeText={handleChange('price')}
                keyboardType="numeric"
              />
              <Input
                label="Inventario"
                style={{ flex: 1 }}
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
                keyboardType="numeric"
              />
            </Layout>
            <ButtonGroup
              style={{ margin: 2, marginTop: 30, marginHorizontal: 15 }}
              size="small"
              appearance="outline"
            >
              {sizes.map((size) => (
                <Button
                  onPress={() =>
                    setFieldValue(
                      'sizes',
                      values.sizes.includes(size)
                        ? values.sizes.filter((s) => s !== size)
                        : [...values.sizes, size]
                    )
                  }
                  key={size}
                  style={{
                    flex: 1,
                    backgroundColor: values.sizes.includes(size)
                      ? theme['color-primary-300']
                      : undefined,
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
                  onPress={() => setFieldValue('gender', gender)}
                  key={gender}
                  style={{
                    flex: 1,
                    backgroundColor: values.gender.startsWith(gender)
                      ? theme['color-primary-300']
                      : undefined,
                  }}
                >
                  {gender}
                </Button>
              ))}
            </ButtonGroup>

            <Button
              onPress={() => handleSubmit()}
              accessoryLeft={<CustomIcon name="save-outline" white />}
              style={{ margin: 15 }}
            >
              Guardar
            </Button>
            <Text>{JSON.stringify(values, null, 2)}</Text>
            <Layout style={{ height: 200 }} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};
