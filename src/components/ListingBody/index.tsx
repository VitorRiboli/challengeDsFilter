import { useEffect, useState } from "react";

import { ProductDTO } from "../../model/productDTO";

import Filter from "../Filter";
import Listing from "../Listing";

import * as productService from "../../services/product-service";

type QueryParams = {
  min?: number;
  max?: number;
}


export default function ListingBody() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({})

  useEffect(() => {
    setProducts(productService.findByPrice(queryParams.min || 0, queryParams.max || Number.MAX_VALUE));

    console.log(products)
  }, [queryParams]);


  function handleFilter(min: number, max: number) {
    setProducts([]);
    setQueryParams({...queryParams, min: min, max: max})
    console.log("teste", min, max)
  }


  return (
    <main>
      <Filter onFilter={handleFilter}/>
      <Listing products={products} />
    </main>
  )
}