import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';


const ViewOrders = () => {

    const [cheesecakeOrders, setCheesecakeOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const {data} = await axios.get('/api/order/getall');
            setCheesecakeOrders(data);
        }
        getOrders();
        console.log(cheesecakeOrders);
    }, []);
    return (
        <body>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <table className="table text-center shadow-lg" >
                        <thead>
                            <tr>
                                <th>Name/Email</th>
                                <th>Base Flavor</th>
                                <th>Toppings</th>
                                <th>Special Requests</th>
                                <th>Quantity</th>
                                <th>Delivery Date</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cheesecakeOrders.map(c => 
                                <tr key={c.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }} >
                                    <td>
                                        <a href={`/orderdetails?${c.id}`}>{c.name}-{c.email}</a>
                                    </td>
                                    <td>{c.base}</td>
                                    <td>{c.toppings}</td>
                                    <td>{c.specialRequests ? c.specialRequests : 'N/A'}</td>
                                    <td>{c.quantity}</td>
                                    <td>{dayjs(c.deliveryDate).format("MM/DD/YYYY")}</td>
                                    <td>{c.total}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </body>
    )
}
export default ViewOrders;