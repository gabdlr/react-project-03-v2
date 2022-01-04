import { ErrorDiv } from "../styles";

const Error = ({children}) => {
    return ( 
        <ErrorDiv>
            {children}
        </ErrorDiv>
     );
}
 
export default Error;