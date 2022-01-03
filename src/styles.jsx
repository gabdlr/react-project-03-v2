import styled from '@emotion/styled'
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
`