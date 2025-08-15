export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  slug: string;
  quantity?: number;
}
