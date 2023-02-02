import './styles.css';
import { useContext, useState } from 'react';
import { ContextProductCount } from '../../util/context-product';

type FormData = {
  min?: number;
  max?: number;
}

type Props = {
  onFilter: Function;
}

export default function Filter({onFilter} : Props) {

  const [formData, setFormData] = useState<FormData>({});

  function handleValue (event : any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name] : value});
  }

  function handleSubmit(event : any) {
    event.preventDefault();
    onFilter(formData.min || 0, formData.max|| Number.MAX_VALUE);
  }

  return (
    <main>
      <form className='form-control' action="" onSubmit={handleSubmit}>
        <input className='input-control'
        name='min'
        value={formData.min || ""}
        onChange={handleValue}
        type="number" 
        placeholder='Preço minimo'
        />
        <input  className='input-control'
        name='max'
        value={formData.max || ""}
        onChange={handleValue}
        type="number" 
        placeholder='Preço máximo'
        />
        <button className='btn-filtrar'
        type='submit'>Filtrar</button>
      </form>
    </main>
  )
}