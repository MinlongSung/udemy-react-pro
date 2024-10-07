import { createContext } from 'react';

import {
    useProduct,
    Product,
    ProductContextProps,
    onChangeArgs,
    InitialValues,
    ProductCardHandlers
} from '../';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({
    product,
    children,
    className = '',
    style = {},
    onChange,
    value,
    initialValues,
}: Props) => {
    const { counter, increaseBy, reset, maxCount, isMaxCountReached, } = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset,
                    })
                }
            </div>
        </Provider>
    )
}