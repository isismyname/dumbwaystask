import React from 'react';
import pp from '../img/ed.jpeg'
import img from '../img/WaysBucks.png';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Adminnav = () => {
  return (

    <div className='container d-flex justify-content-between py-4'>
    <div className="img-fluid">
        <img src={img} alt="Logo" />
    </div>
    <div className="d-flex  w-25">
        <Dropdown className="d-flex">
            <Dropdown.Toggle className='w-75' variant="no" id="dropdown-basic">
                <img className='w-50 rounded-circle' src={pp} alt="Profile"/>
            </Dropdown.Toggle>
            <Dropdown.Menu className='text-center'>
                    <Dropdown.Item>
                        <Link className='text-decoration-none link-dark' to='/admin/add-product'>
                            Add Product
                        </Link>
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item>
                        <Link className='text-decoration-none link-dark' to='/admin/add-toping'>
                            Add Toping
                        </Link>
                    </Dropdown.Item>
                    <hr/>
                    <Dropdown.Item><Link className='text-decoration-none link-dark' to='/'>Logout</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</div>
  )
};
export default Adminnav;