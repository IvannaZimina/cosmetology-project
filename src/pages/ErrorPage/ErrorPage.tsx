import { FC } from "react";
import { useRouteError } from "react-router-dom"

const ErrorPage: FC = () => {
    const error: any = useRouteError()
    return (
        <>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <p>{error.statusText && error.mesage}</p> 
        </>
    );
};

export default ErrorPage;
