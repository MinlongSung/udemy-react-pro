import { createContext } from 'react';

import styles from '../styles/styles.module.css';

import {
    ProductContextProps,
    ProductCardProps,
    useProduct,
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
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}