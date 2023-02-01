import { ProductDTO } from "../../model/productDTO";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <main>

      <div className="control-product-card">
        
        {products.map((product) => (
          <div className="product-card">
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
          </div>
        ))}

      </div>
    </main>
  );
}
