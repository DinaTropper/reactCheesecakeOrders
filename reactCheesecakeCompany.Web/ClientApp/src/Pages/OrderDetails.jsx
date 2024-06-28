import {useParams } from 'react-router-dom'
import ViewOrders from "./ViewOrders";
import { useState, useEffect } from 'react';

const OrderDetails = () => {
    const { id } = useParams();
    const { cheesecakeOrder, setCheesecakeOrder } = useState;

    useEffect(() => {
        const getById = async () => {
            const {data} = await axios.get(`/api/order/getbyid?id=${id}`);
            setCheesecakeOrder(data);
            console.log(data);
        }
        getById();
    }, []);
    const { name, email, base, toppings, specialRequests, quantity, deliveryDate, total } = cheesecakeOrder;
    return (
        <body>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="card text-center shadow p-3 mb-5 bg-body rounded">
                        <div className="card-body">
                            <h3 className="card-title fw-bold">Order for {name}</h3>
                            <p className="card-text fs-5">{email}</p>
                            <p className="card-text fs-5">{base}</p>
                            <p className="card-text fs-5">{toppings}</p>

                            <p className="card-text fs-5">{specialRequests}</p>
                            <p className="card-text fs-5">{quantity}</p>
                            <p className="card-text fs-5">{deliveryDate}</p>
                            <p className="card-text fs-5">{total}</p>
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