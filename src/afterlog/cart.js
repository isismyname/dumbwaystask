import React from 'react';
import HeaderA from './headerafter';
import img from '../img/kopi1.png';
import img1 from '../img/kopi2.png';
import {Form, Button} from 'react-bootstrap';
import img2 from '../img/invoice.png';
import { Link } from 'react-router-dom';

const cart = () =>{
    const boba = [
        {
            nameB: "Ice Coffee Palm Sugar",
            priceB: "Rp. 27.000"
        },{
            nameB: "Ice Coffee Green Tea",
            priceB: "Rp. 27.000"
        }
    ]
    const infoT = [
        {
            nameT: "Bubble Tea Gelatin",
            priceT: "Rp. 3.000"
        },{
            nameT: "Manggo",
            priceT: "Rp. 5.000"
        },{
            nameT: "Green Coconut",
            priceT: "Rp. 2.000"
        },{
            nameT: "Boba Manggo",
            priceT: "Rp. 4.000"
        },{
            nameT: "Bill Berry Boba",
            priceT: "Rp. 5.000"
        },{
            nameT: "Kiwi Popping Pearl",
            priceT: "Rp. 4.000"
        },{
            nameT: "Matcha Cantaloupe",
            priceT: "Rp. 2.000"
        },{
            nameT: "Strawberry Popping",
            priceT: "Rp. 3.000"
        },
]
    return(
        <div>
            <HeaderA/>
            <div className="container my-5">
                <div className="d-flex justify-content-around">
                    <div className="t-red">
                        <h3>My Cart</h3>
                        <p>Review Your Order</p>
                        <hr />
                            <div className="row">
                                <div className="col d-flex">
                                    <div className="d-grid img-fluid">
                                        <img className='w-50 mx-auto my-1' src={img} alt="Kopi1" />
                                        <img className='w-50 mx-auto my-1' src={img1} alt="Kopi2" />
                                    </div>
                                    <div className="d-grid mx-2">
                                        <div className="upp my-1">
                                            <h4>{boba[0].nameB}</h4>
                                            <p className='upp'>Toping : {infoT[4].nameT}, {infoT[0].nameT} </p>
                                        </div>
                                        <div className="upp">
                                            <h4>{boba[0].nameB}</h4>
                                            <p>Toping : {infoT[4].nameT}, {infoT[0].nameT} </p>
                                        </div>
                                    </div>
                                    <div className="d-grid t-red">
                                        <div className="my-1 text-end mx-auto">
                                            <p> Rp. 36.000</p>
                                            <img className='trash' src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-trash-user-interface-icongeek26-outline-icongeek26.png" alt='Delete'/>
                                        </div>
                                        <div className="my-1 text-end mx-auto">
                                            <p> Rp. 36.000</p>
                                            <img className='trash' src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-trash-user-interface-icongeek26-outline-icongeek26.png" alt='Delete'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                        <div className="row">
                            <div className="col">
                                <hr />
                                    <div className="d-flex justify-content-between">
                                        <div className="d-grid">
                                            <p>Subtotal</p>
                                            <p>Qty</p>
                                        </div>
                                        <div className="my-1 text-end">
                                            <p> Rp. 36.000</p>
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <div className="d-grid">
                                            <p>Total</p>
                                        </div>
                                        <div className="my-1 text-end">
                                            <p>Rp. 69.000</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="col m-auto">
                                <div className="border bg-secondary bg-opacity-25 text-center py-4 border-2 rounded border-danger">
                                    <img className='my-3' src={img2} alt="Invoice" />
                                    <p>Attache of Transaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Form.Group className="my-5" controlId="name">
                            <Form.Control className='border-2 border-danger' type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="my-5" controlId="email">
                            <Form.Control className='border-2 border-danger' type="email" placeholder='Email' rows={3} />
                        </Form.Group>
                        <Form.Group className="my-5" controlId="number">
                            <Form.Control className='border-2 border-danger' type="text" placeholder='Phone' rows={3} />
                        </Form.Group>
                        <Form.Group className="my-5" controlId="pcode">
                            <Form.Control className='border-2 border-danger' type="text" placeholder='Post Code' rows={3} />
                        </Form.Group>
                        <Form.Group className="my-5" controlId="address">
                            <Form.Control className='border-2 border-danger' as="textarea" placeholder='Address' rows={3} />
                        </Form.Group>
                        <Form.Group>
                        <Link className='text-decoration-none link-light' to='/userid'>
                            <Button className='mx-auto fw-bold my-3 w-100' variant="danger">Pay</Button>
                        </Link>
                        </Form.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default cart;