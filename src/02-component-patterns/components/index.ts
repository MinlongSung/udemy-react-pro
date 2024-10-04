import { ProductCardHOCProps } from "../interfaces/product.interface";

import { ProductCard as ProductCardHOC } from "./product-card";
import { ProductImage } from "./product-image";
import { ProductTitle } from "./product-title";
import { ProductButtons } from "./product-buttons";

export { ProductImage } from "./product-image";
export { ProductTitle } from "./product-title";
export { ProductButtons } from "./product-buttons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;