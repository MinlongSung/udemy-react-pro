import { 
  ProductButtons, 
  ProductCard, 
  ProductImage, 
  products, 
  ProductTitle, 
  useShoppingCart 
} from "../";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>

        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              value={shoppingCart[product.id]?.count || 0}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.2)'
                }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        <div className="shopping-cart">
          {
            Object.values(shoppingCart).map(productInCart => (
              <ProductCard
                key={productInCart.id}
                product={productInCart}
                className="bg-dark text-white"
                style={{ width: '100px' }}
                value={productInCart.count}
                onChange={onProductCountChange}
              >
                <ProductImage
                  className="custom-image"
                  style={{
                    boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.2)'
                  }}
                />
                <ProductButtons
                  className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}