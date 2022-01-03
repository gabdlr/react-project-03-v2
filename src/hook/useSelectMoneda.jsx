import React from 'react';
import { Label } from '../styles';
const useSelectMoneda = (label) => {
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [SelectMonedas]
}
 
export default useSelectMoneda;