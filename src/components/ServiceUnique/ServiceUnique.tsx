import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceUnique: FC = () => {   
    const { serviceId } = useParams();
    const { name, duration, id: mid }: any = useLoaderData();

    return (
        <>
            <h1>Service</h1>
            <p>ServiceId:{serviceId}</p>
            <p>
                {mid} : {name} : {duration}
            </p>
        </>
    );

};

export default ServiceUnique;
