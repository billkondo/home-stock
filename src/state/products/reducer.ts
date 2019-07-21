import { PRODUCT_CREATE, ProductsActionType, ProductsStateType } from './types';

const initialState: ProductsStateType = {
  products: [
    {
      name: 'Fio Dental',
      tags: []
    }
  ]
};

export const productsReducer = (
  state = initialState,
  action: ProductsActionType
) => {
  switch (action.type) {
    case PRODUCT_CREATE:
      return {
        ...state,
        products: state.products.concat(action.product)
      };

    default:
      return state;
  }
};
