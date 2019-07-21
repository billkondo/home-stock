import { Tag } from '../tags/types';

export interface Product {
  name: string;
  description?: string;
  tags: Tag[];
}

export const PRODUCT_CREATE = 'PRODUCT_CREATE';

export type ProductCreateAction = {
  type: typeof PRODUCT_CREATE;
  product: Product;
};

export type ProductsActionType = ProductCreateAction;

export interface ProductsStateType {
  products: Product[];
}
