import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return ( 
    <div>this is Error page
        <p> with { err.status }</p>
    </div>

)}
export default Error;