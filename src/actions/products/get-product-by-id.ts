import { tesloApi } from '../../config/api/tesloApi';
import { Product } from '../../domain/entities/product';
import {
  Gender,
  TesloProduct,
} from '../../infrastructure/interfaces/testlo-products.response';
import { ProductMapper } from '../../infrastructure/mappers/product.mapper';

const emptyProduct: Product = {
  id: '',
  title: 'Nuevo Producto',
  description: '',
  price: 0,
  images: [],
  slug: '',
  gender: Gender.Unisex,
  sizes: [],
  stock: 0,
  tags: [],
};

export const getProductById = async (id: string): Promise<Product> => {
  if (id === 'new') return emptyProduct;

  try {
    const { data } = await tesloApi.get<TesloProduct>(`/products/${id}`);

    return ProductMapper.testloProductToEntity(data);
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id: ${id}`);
  }
};
