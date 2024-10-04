import { createContext } from 'react';

import { 
    ProductContextProps, 
    ProductCardProps, 
    // ProductImage, 
    // ProductTitle, 
    useProduct, 
    // ProductButtons
} from '../';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            {children}
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;