import { Heading, Contenedor, Imagen } from './styles';
import Formulario from './components/Formulario';
import useSelectMoneda from './hook/useSelectMoneda';
import './App.css'
const [SelectMonedas] = useSelectMoneda('nanan');
function App() {
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
          <SelectMonedas/>
          <Formulario/>
        </div>
      </Contenedor>
  )
}

export default App
