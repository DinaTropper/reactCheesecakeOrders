
import { useState, useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        console.log('in effect');
    }, []);


    return (
        <body>
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h1 className="display-4">Welcome to the Cheesecake Factory</h1>
                        <p className="lead">
                            <a href="/orderForm">
                                <button className="btn btn-dark btn-lg">Click here to order your own custom cheesecake</button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>


        </body>
    )

}


export default Home;