import { useContext } from 'react';
import { ContextProductCount } from '../../util/context-product';
import './styles.css';

export default function Header() {

  const { contextProductCount } = useContext(ContextProductCount)

  return (
    <header>
      <nav>
        <h1>DSFilter</h1>
        <span>{contextProductCount} {contextProductCount > 1 ? "produtos" : "produto"}</span>
      </nav>
    </header>
  )
}