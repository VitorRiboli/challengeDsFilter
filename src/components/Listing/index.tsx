import { useContext } from "react";
import { ProductDTO } from "../../model/productDTO";
import { ContextProductCount } from "../../util/context-product";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {

  const { setContextProductCount } = useContext(ContextProductCount);

  setContextProductCount(products.length)

  return (
    <main>
      <div className="control-product-card">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
