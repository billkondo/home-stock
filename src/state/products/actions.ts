import { PRODUCT_CREATE, ProductsActionType, Product } from './types';

export const create_product = (product: Product): ProductsActionType => {
  return {
    type: PRODUCT_CREATE,
    product
  };
};
