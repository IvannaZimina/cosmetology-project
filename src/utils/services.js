export const fetchServicies = ({ params }) => {
    return new Promise((res) => {
        setTimeout(()=> res({
            name: params.name,
            duration: 300,
            id: params.serviceId
        }))
    })
}