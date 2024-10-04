import { Props as ProductButtonsProps } from "../components/product-buttons";
import { Props as ProductCardProps } from "../components/product-card";
import { Props as ProductImageProps } from "../components/product-image";
import { Props as ProductTitleProps } from "../components/product-title";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}