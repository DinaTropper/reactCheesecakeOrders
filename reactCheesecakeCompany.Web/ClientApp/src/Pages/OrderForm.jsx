
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from "dayjs";
import OrderDetails from './OrderDetails';

const OrderForm = () => {
    const [cheesecakeOrder, setCheesecakeOrder] = useState({
        name: '',
        email: '',
        base: '',
        toppings: [],
        specialRequests: '',
        deliveryDate: '',
        quantity: 1,
        total: ''
    })
    const bases = [
        'classic', 'chocolate', 'red velvet', 'brownie'
    ];
    const toppings = [
        'Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds', 'Toasted Coconut', 'Graham Cracker Crumble',
        'Cookie Dough', 'Mint Chocolate Chips', 'Caramelized Bananas', 'Rainbow Sprinkles', 'Powdered Sugar', 'White Chocolate Shavings',
        'Peanut Butter Drizzle', 'Dark Chocolate Drizzle'
    ];

    const navigate = useNavigate();

    useEffect(() => {
        console.log('in effect');
    }, []);

    const onChecked = (t) => {
        let toppingTypes = [];
        cheesecakeOrder.toppings.includes(t) ?
            toppingTypes = cheesecakeOrder.toppings.filter(toppings => toppings !== t) :
            toppingTypes = [...cheesecakeOrder.toppings, t];
        setCheesecakeOrder({ ...cheesecakeOrder, toppings: toppingTypes });
        console.log(toppingTypes);
        console.log(cheesecakeOrder);
    }

    const onTextChange = e => {
        const copy = { ...cheesecakeOrder };
        copy[e.target.name] = e.target.value;
        setCheesecakeOrder(copy);
        console.log(cheesecakeOrder);
    }
    const { name, email, base, specialRequests, total, deliveryDate, quantity } = cheesecakeOrder;

    const totalPrice = (quantity * 49.99) + (toppings.length * 3.95 * quantity);

    const isValid = (name && email && base && deliveryDate && quantity);

    const onSubmitClick = () => {
        cheesecakeOrder.toppings = cheesecakeOrder.toppings.join(',');
        cheesecakeOrder.total = totalPrice;
         axios.post('/api/order/addorder', cheesecakeOrder);
        navigate('/Success');
        console.log(cheesecakeOrder);
    }
    return (

        <>
            <body>
                <div className="container">
                    <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={onTextChange} name="name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={onTextChange} name="email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                                <select className="form-select" onChange={onTextChange} name="base">
                                    <option>Choose...</option>
                                    {bases.map(b => (
                                        <option key={b}>{b}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                {toppings.map(t => (
                                    <div key={t.id} className='form-check' name="toppings" onChange={() => onChecked(t)}>
                                        <input className='form-check-input' type='checkbox' />
                                        <label className='form-check-label'>{t}</label>
                                    </div>
                                ))}
                                <div className="mb-3">
                                    <label className="form-label">Special Requests:</label>
                                    <textarea className="form-control" rows="2" onChange={onTextChange} name="specialRequests" value={specialRequests}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Quantity:</label>
                                    <input type="number" className="form-control" min="1" onChange={onTextChange} name="quantity" value={quantity} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Delivery Date:</label>
                                    <input type="date" className="form-control" value={deliveryDate} name="deliveryDate" onChange={onTextChange} />
                                </div>
                                <button type="submit" disabled={isValid ? false : true} className="btn btn-primary" onClick={onSubmitClick}>Submit Order</button>
                                <div className='col-md-12'>
                                    <div className="col-md-6 position-sticky" style={{ top: "2rem" }}>
                                        <h2 className="mb-4">Live Preview</h2>
                                        <div className="card" style={{ top: "2rem" }} >
                                            <img src="/cheesecake.jpg" className="card-img-top" alt="cheesecake" />
                                            <div className="card-body">
                                                <h5 className="card-title">Custom Cheesecake</h5>
                                                <p className="card-text">Base: {base}</p>
                                                <p className="card-text">Toppings:{cheesecakeOrder.toppings.join(',')}</p>
                                                <p className="card-text">Special Requests:{specialRequests} </p>
                                                <p className="card-text">Quantity: {quantity}</p>
                                                <p className="card-text">Delivery Date:{dayjs(deliveryDate).format("MM/DD/YYYY")} </p>
                                                <p className="card-text fw-bold">Total:${totalPrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default OrderForm;