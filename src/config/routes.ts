export type ManagementTabType = 'products' | 'tags' | ':tab';

export const routes = {
  index: '/',
  add_product: '/add_product',
  purchases: '/purchases',
  my_products: '/my_products',
  management: (tab: ManagementTabType = ':tab') => `/management/${tab}`,
  add_tag: '/add_tag'
};
