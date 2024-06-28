import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import OrderForm from './Pages/OrderForm';
import ViewOrders from './Pages/ViewOrders';
import OrderDetails from './Pages/OrderDetails';
import Success from './Pages/Success';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/OrderForm' element={<OrderForm />} />
                <Route path='/ViewOrders' element={<ViewOrders />} />
                <Route path='/OrderDetails/:id' element={<OrderDetails />} />
                <Route path='/Success' element={<Success />} />

            </Routes>
        </Layout>
    );
}

export default App;