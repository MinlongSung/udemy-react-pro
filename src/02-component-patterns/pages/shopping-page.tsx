import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../"


const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        {/* <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hello World"} />
          <ProductCard.Buttons />
        </ProductCard> */}
      </div>
    </div>
  )
}