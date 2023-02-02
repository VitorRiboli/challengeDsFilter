import { useState } from "react";

import Header from "./components/Header";
import ListingBody from "./components/ListingBody";

import { ContextProductCount } from "./util/context-product";


function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(13);

  return (
    <ContextProductCount.Provider 
      value={{ contextProductCount, setContextProductCount }}
      >
      <Header />
      <ListingBody />
    </ContextProductCount.Provider>
  );
}

export default App;
