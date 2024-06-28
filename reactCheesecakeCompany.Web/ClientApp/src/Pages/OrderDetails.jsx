import {useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const OrderDetails = () => {
    const { id } = useParams();
    const [cheesecakeOrder, setCheesecakeOrder] = useState({});
    

    useEffect(() => {
        const getById = async () => {
            const {data} = await axios.get(`/api/order/getbyid?id=${id}`);
            setCheesecakeOrder(data);
            console.log(data);
        }

        getById();
    }, [])

    //if (!cheesecakeOrder) {
    //    return <h1>Loading...</h1>
    //}

    const { name, email, base, toppings, specialRequests, quantity, deliveryDate, total } = cheesecakeOrder;
    return (
        <body>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="card text-center shadow p-3 mb-5 bg-body rounded">
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Order for {name}</h3>
                            <p className="card-text fs-5">Email: {email}</p>
                            <p className="card-text fs-5">Base: {base}</p>
                            <p className="card-text fs-5">Toppings: {toppings}</p>

                            <p className="card-text fs-5">Special requests:{specialRequests}</p>
                            <p className="card-text fs-5">Quantity: {quantity}</p>
                            <p className="card-text fs-5">Delivery Date:{dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                            <p className="card-text fs-5">Total: ${total}</p>
                        </div>
                        <a href="/vieworders">
                            <button className="btn btn-primary w-100">Back to Orders</button>
                        </a>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default OrderDetails;