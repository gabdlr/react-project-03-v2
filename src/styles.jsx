import styled from '@emotion/styled';

/**
 * App.jsx
 */
export const Heading = styled.h1`
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 34px;
    font-weight: 700px;
    margin-bottom: 50px;
    margin-top: 80px;
    text-align: center;
    &::after{
        content: '';
        background-color: #66a2fe;
        display: block;
        height: 6px;
        margin: 10px auto 0px;
        width: 100px;
    }
`;

/**
 * App.jsx
 */
export const Contenedor = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
    @media(min-width: 992px){
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

/**
 * App.jsx
 */
export const Imagen = styled.img`
    display: block;
    margin: 100px auto 0 auto;
    max-width: 400px;
    width: 80%;
`;

/**
 * Formulario.jsx
 */
export const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    padding: 10px;
    text-transform: uppercase;
    width: 100%;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`;

/**
 * useSelectMoneda.jsx
 */
export const Label = styled.label`
    color: #ffffff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

/**
 * useSelectMoneda.jsx
 */
export const Select = styled.select`
    border-radius: 10px;  
    font-size: 18px;
    padding: 14px;
    width: 100%;
`;

/**
 * Error.jsx
 */
export const ErrorDiv = styled.div`
    background-color: #B7322C;
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;  
`;

/**
 * Resultado.jsx
 */
export const ContenedorResultado = styled.div`
    align-items: center;
    color: #ffffff;
    display: flex;
    font-family: 'Lato', sans-serif;
    gap: 1rem;
    margin-top: 30px;
`;
export const ResultadoTexto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

export const ResultadoPrecio = styled.p`
    margin-top: 0px;
    font-size: 30px;
    span {
        font-weight: 700;
    }
`;

export const ResultadoImagen = styled.img`
    display: block;
    width: 100px;
`;