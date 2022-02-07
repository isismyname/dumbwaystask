import React from 'react';
import pp from '../img/ed.jpeg'
import img from '../img/WaysBucks.png';
import {Dropdown} from 'react-bootstrap';
import Cart from '../img/bxs-cart.svg';
import {Link} from 'react-router-dom';

export function HeaderA(){
    return(
    <div>
        <div className='container d-flex justify-content-between py-4'>
            <div className="img-fluid">
                <Link className='text-decoration-none link-dark' to='/userid'>
                    <img src={img} alt="Logo" />
                </Link>
            </div>
            <div className="d-flex  w-25">
                <Link className='text-decoration-none link-dark' to='/cart'>
                    <img className='mx-2 my-5' src={Cart} alt="Cart" />
                </Link>
                <Dropdown className="d-flex">
                    <Dropdown.Toggle className='w-75' variant="no" id="dropdown-basic">
                        <img className='w-50 rounded-circle' src={pp} alt="Profile"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='text-center'>
                            <Dropdown.Item>
                                <Link className='text-decoration-none link-dark' to='/profile'>
                                    Profile
                                </Link>
                            </Dropdown.Item>
                        <hr />
                            <Dropdown.Item><Link className='text-decoration-none link-dark' to='/'>Logout</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        </div>
    )
}
export default HeaderA;