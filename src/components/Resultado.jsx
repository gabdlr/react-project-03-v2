import { ContenedorResultado, ResultadoPrecio, ResultadoTexto, ResultadoImagen } from "../styles";
const Resultado = ({resultadoCotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultadoCotizacion;
    return ( 
        <ContenedorResultado>
            <ResultadoImagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda"></ResultadoImagen>
            <div>
                <ResultadoPrecio>El precio es de: <span>{PRICE}</span></ResultadoPrecio>
                <ResultadoTexto>Mayor precio del día: <span>{HIGHDAY}</span></ResultadoTexto>
                <ResultadoTexto>Menor precio del día: <span>{LOWDAY}</span></ResultadoTexto>
                <ResultadoTexto>Variación: <span>{CHANGEPCT24HOUR}%</span></ResultadoTexto>
                <ResultadoTexto>Última actualización: <span>{LASTUPDATE}</span></ResultadoTexto>
            </div>
        </ContenedorResultado>
     );
}
 
export default Resultado;