import { useState, useEffect } from 'react';
import { Heading, Contenedor, Imagen } from './styles';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const [ monedas, setMonedas ] = useState({
    moneda:"",
    cripto:""
  });
  const [ cargando, setCargando ] = useState(false);
  const [ resultadoCotizacion, setResultadoCotizacion ] = useState({});
  useEffect(()=>{
    if(monedas.moneda){
      const cotizarCripto = async () => {
        setCargando(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.cripto}&tsyms=${monedas.moneda}`;
        const resultado = await (await fetch(url)).json();
        setResultadoCotizacion(resultado.DISPLAY[monedas.cripto][monedas.moneda]);
        setCargando(false);
      } 
      cotizarCripto();      
    }
  },[monedas])
  return (
      <Contenedor>
          <div>
          <Imagen
          src='./img/imagen-criptos.png'
          alt='imagen criptomonedas'
          />
        </div>
        <div>
          <Heading>Cotiza Criptomonedas Al Instante</Heading>
          <Formulario
            setMonedas={setMonedas}
          />
          {cargando && <Spinner/>}
          {resultadoCotizacion.PRICE && !cargando && <Resultado resultadoCotizacion={resultadoCotizacion}/>}
        </div>
      </Contenedor>
  )
}

export default App
