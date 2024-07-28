
const Success = () => {
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-4">Your order has been submitted.</h1>
                    <p className="lead">You will receive a confirmation email shortly. Thank you and enjoy!</p>
                    <p className="lead">
                        <a href="/orderForm">
                            <button className="btn btn-outline-dark btn-lg">Click here to order another</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Success;