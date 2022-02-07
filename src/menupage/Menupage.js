import React from 'react';
import img1 from '../img/toping1.png';
import img2 from '../img/toping2.png';
import img3 from '../img/toping3.png';
import img4 from '../img/toping4.png';
import img5 from '../img/toping5.png';
import img6 from '../img/toping6.png';
import img7 from '../img/toping7.png';
import img8 from '../img/Toping8.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Home = (prop) => {
    
    const [count, setCount] = useState(0);
    const[produk, setProduk] = useState(0);
    const boba = [
        {
            nameB: "Ice Coffee Palm Sugar",
            priceB: `Rp. 27.000+`
        }
    ]
    return(
    <div>
        <div className='d-flex justify-content-between'>
            <div className='px-auto mx-2 w-100'>
                <img className='mx-auto' src={img1} alt="kopi1" />
                <div className="card-text my-auto">
                    {prop.nameT0}
                </div>
            </div>
            <div className='px-auto mx-2 w-100'>
                <img className='mx-auto' src={img2} alt="kopi1" />
                <div className="card-text my-auto">
                    {prop.nameT1}
                </div>
            </div>
            <div onClick={()=> setProduk(produk +1)} className='px-auto mx-2 w-100'>
                <img onClick={() => setCount(count + 3000)} className='mx-auto' src={img3} alt="kopi1" />
                <div className="card-text my-auto">
                    {prop.nameT2} {produk}
                </div>
            </div>
            <div className='px-auto mx-2 w-100'>
                <img className='mx-auto' src={img4} alt="kopi1" />
                <div className="card-text my-auto">
                    {prop.nameT3}
                </div>
            </div>
        </div>
            <div className='d-flex justify-content-between'>
                <div className='px-auto mx-2 w-100'>
                    <img className='mx-auto' src={img5} alt="kopi1" />
                    <div className="card-text my-auto">
                        {prop.nameT4}
                    </div>
                </div>
                <div className='px-auto mx-2 w-100'>
                    <img className='mx-auto' src={img6} alt="kopi1" />
                    <div className="card-text my-auto">
                        {prop.nameT5}
                    </div>
                </div>
                <div className='px-auto mx-2 w-100'>
                    <img className='mx-auto' src={img7} alt="kopi1" />
                    <div className="card-text my-auto">
                        {prop.nameT6}
                    </div>
                </div>
                <div className='px-auto mx-2 w-100'>
                    <img className='mx-auto' src={img8} alt="kopi1" />
                    <div className="card-text my-auto">
                        {prop.nameT7}
                    </div>
                </div>
            </div>
                    <div className='my-5 d-flex justify-content-between'>
                        <p className='fs-4'><b>Total</b></p>
                        <p className='fs-4'> <b>{boba[0].priceB+`${count}`}</b> </p>
                    </div>
                    <Link className='text-decoration-none link-dark' to='/cart'>
                        <button className='btn btn-danger w-100 fs-5'><b>Add Cart</b></button>
                    </Link>
    </div>
    )
}
export default Home;