import React from 'react';
import HeaderA from './headerafter';
import qr from '../img/qr-code 1.png';
import logo from '../img/WaysBucks.png';
import img from '../img/ed.jpeg';
import img1 from '../img/kopi1.png';
import img2 from '../img/kopi2.png';

const profile =()=>{
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
            <div className="container-fluid my-5">
                    <div className="d-flex justify-content-evenly text-start">
                        <div className="w-25">
                                <h3>My Profile</h3>
                                <div className='d-flex'>
                                    <img className='w-75 my-1' src={img} alt="" />
                                    <div className='mx-4'>
                                        <p>Full Name</p>
                                        <p>Parjon</p>
                                        <hr />
                                        <p>Email</p>
                                        <p>Parjon@mail.com</p>
                                    </div>
                                </div>
                        </div>
                    <div className="w-50 bg-danger bg-opacity-25 rounded">
                            <h3>My Transaction</h3>
                            <div className="row">
                                <div className="col d-flex flex-column">
                                    <img className='gb my-auto mx-auto' src={img1} alt="Kopi1" />
                                    <img className='gb my-auto mx-auto' src={img2} alt="Kopi1" />
                                </div>
                                <div className="col up t-red">
                                    <p className='fs-4 up'><b>{boba[0].nameB}</b></p>
                                    <p className='t-day'><b>Friday</b>, 5 April 2022</p>
                                    <p className='up'><b>Toping</b> : {infoT[4].nameT}, {infoT[0].nameT}</p>
                                    <p>Price : Rp. 33.000 </p>
                                    <p className='fs-4 up mt-5'><b>{boba[1].nameB}</b></p>
                                    <p className='t-day'><b>Friday</b>, 5 April 2022</p>
                                    <p className='up'><b>Toping</b> : {infoT[4].nameT}, {infoT[1].nameT}</p>
                                    <p>Price : Rp. 36.000 </p>
                                </div>
                                <div className="col mx-2">
                                    <img className='mx-5' src={logo} alt="" />
                                    <img className='w-100 my-5 mx-auto' src={qr} alt="" />
                                    <p className='text-info text-center bg-opacity-25 bg-info'>On The Wayt</p>
                                    <div className="d-flex t-red justify-content-between">
                                        <p><b>Sub Total</b></p>
                                        <p>:</p>
                                        <p>Rp. 69.000</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default profile;