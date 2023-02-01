import './styles.css';
import { useState } from 'react';

type FormData = {
  min?: number;
  max?: number;
}


export default function Filter() {

  const [formData, setFormData] = useState<FormData>({});

  function handleValue (event : any) {
    const value = event.target.value;
    const name = event.target.name;
    
    setFormData({...formData, [name] : value});
  }

  //Essa função manda os argumentos para o componente pai, chamando a função do componente pai
  function handleSubmit(event : any) {
    event.preventDefault();
    //chamar função do componente pai, passando o min e max
    //onFilter(formData.min, formDataMax);
  }

  return (
    <main>
      <form className='form-control' action="" onSubmit={handleSubmit}>
        <input className='input-control'
        name='min'
        value={formData.min}
        onChange={handleValue}
        type="number" 
        placeholder='Preço minimo'
        />
        <input  className='input-control'
        name='max'
        value={formData.max}
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