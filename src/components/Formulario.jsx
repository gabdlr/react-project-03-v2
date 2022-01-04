import { useEffect, useState } from "react";
import { InputSubmit } from "../styles";
import Error from "./Error";
import useSelectMoneda from "../hook/useSelectMoneda";
import { monedas } from "../data/monedas";

const Formulario = ({setMonedas}) => {
    const [ criptos, setCriptos ] = useState([]);
    const [ moneda, SelectMonedas ] = useSelectMoneda('Selecciona tu moneda', monedas);
    const [ cripto, SelectCripto ] = useSelectMoneda('Selecciona la criptomoneda', criptos);
    const [ error, setError ] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if([moneda, cripto].includes("")) {
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            cripto
        })
    }
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await (await fetch(url)).json();
            const arrayCriptos = respuesta.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            });
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    },[]);
    return (
        <>
        {error && (<Error>Todos los campos son obligatorios</Error>)} 
        <form onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCripto/>
            <InputSubmit type="submit" value="Cotizar" />
        </form>
        </>
     );
}
 
export default Formulario;