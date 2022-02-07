import React from 'react';
import img from '../img/WaysBucks.png';
import {Modal, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Home(){
  const [showL, setShowL] = useState(false);
  const handleCloseL = () => setShowL(false);
  const handleShowL = () => setShowL(true);
  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

    return(
        <div className='container d-flex justify-content-between py-4'>
          <div className="img-fluid">
            <Link className='text-decoration-none' to='/'>
              <img src={img} alt="Logo" />
            </Link>
          </div>
          <div className="d-flex my-auto">
            <div>
                <button onClick={handleShowL} className="btn btn-light border-2 px-5 border-rounded border-danger">Login</button>
            </div>
            <div>
                <button onClick={handleShowR} className="btn btn-danger ms-3 rounded border-2 px-5 ">Register</button>
            </div>
          </div>      
            <Modal show={showL} onHide={handleCloseL}>
                <Modal.Body>
                <Modal.Title className='fs-1 fw-1 t-red my-3'>Login</Modal.Title>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control className='border-2 border-danger' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Control className='border-2 border-danger' type="password" placeholder='Password' rows={3} />
                </Form.Group>  
                <Link to='/userid'>
                <Form.Group>
                        <Button className='mx-auto fw-bold my-3 w-100' variant="danger">Login</Button>
                </Form.Group>
                </Link>
                <Form.Group>
                    <p className='text-center'>Don't have an Account? Click <span className='fw-bold' onClick={handleShowR} >Here</span></p>
                </Form.Group>
                </Modal.Body>
            </Modal>      
            <Modal show={showR} onHide={handleCloseR}>
                <Modal.Body>
                    <Form.Group>
                        <Modal.Title className='fs-1 fw-1 t-red my-3'>Register</Modal.Title>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Control className='border-2 border-danger' type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Password">
                        <Form.Control className='border-2 border-danger' type="password" placeholder='Password' rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Control className='border-2 border-danger' type="Nickname" placeholder='Nickname' rows={3} />
                    </Form.Group>
                        <Form.Group>
                            <Button className='mx-auto fw-bold my-3 w-100' variant="danger" onClick={handleShowL}>Register</Button>
                        </Form.Group>
                    <Form.Group>
                        <p className='text-center' variant="danger">Already have an Account? Click <span className='fw-bold' onClick={handleShowL}>Here</span></p>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Home;