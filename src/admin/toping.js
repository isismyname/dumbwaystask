import React from 'react';
import img from '../img/toping1.png';
import {Modal, Form, Button} from 'react-bootstrap';
import Admin from '../admin/adminnav';

const Toping = ()=>{
    return (
        <div>
            <Admin/>
            <div className="d-flex  container my-1">
                <div className='w-100'>
                        <Modal.Body>
                            <Form.Group>
                                <Modal.Title className='fs-1 fw-1 t-red my-3'>Product</Modal.Title>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Control className='border-2 border-danger' type="text" placeholder="Name Product" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Password">
                                <Form.Control className='border-2 border-danger' type="Price" placeholder='Price' rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Control className='border-2 border-danger' type="file" placeholder="Photo Product" />
                            </Form.Group>
                            <Form.Group>
                                <Button className='mx-auto fw-bold my-3 w-100' variant="danger">Add Product</Button>
                            </Form.Group>
                        </Modal.Body>
                </div>
                <div className='w-50 my-5'>
                    <img className='w-75 mt-auto' src={img} alt="Product" />
                </div>
            </div>
        </div>
    )
}
export default Toping;