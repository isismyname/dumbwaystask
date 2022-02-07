import React from 'react';
import Admin from './adminnav';
import { useState } from 'react';
import qr from '../img/qr-code 1.png';
import logo from '../img/WaysBucks.png';
import img1 from '../img/kopi1.png';
import img2 from '../img/kopi2.png';
import { Modal } from 'react-bootstrap';

const Income = () =>{
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ktp =[
        {
            number: "1",
            NameKTP:"Sugeng No Pants",
            Address:"Cileungsi",
            PostCode:"16820",
            Income:"Rp. 69.000",
            Status:"Waiting Approve",
        },{
            number: "2",
            NameKTP:"Haris Gams",
            Address:"Serang",
            PostCode:"42111",
            Income:"Rp. 30.000",
            Status:"Success",
        },{
            number: "3",
            NameKTP:"Aziz Union",
            Address:"Bekasi",
            PostCode:"13450",
            Income:"Rp. 28.000",
            Status:"Cancel",
        },{
            number: "4",
            NameKTP:"Lae Tanjung Balai",
            Address:"Tanjung Balai",
            PostCode:"21331",
            Income:"Rp. 30.000",
            Status:"On the Way",
        },
    ]
    return (
        <div>
            <Admin/>
            <div className=" container my-5">
                <h1>Income Transaction</h1>
                <div className="container">
                    <table border='2' className='table table-bordered border-2 border-dark'>
                    <tr className='text-dark text-center bg-dark bg-opacity-25'>
                        <th className='border-dark border-2'>No</th>
                        <th className='border-dark border-2'>Name</th>
                        <th className='border-dark border-2'>Address</th>
                        <th className='border-dark border-2'>Post Code</th>
                        <th className='border-dark border-2'>Income</th>
                        <th className='border-dark border-2'>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr className='text-center'>
                        <td className='border-dark border-2'>{ktp[0].number}</td>
                        <td className='border-dark border-2'>{ktp[0].NameKTP}</td>
                        <td className='border-dark border-2'>{ktp[0].Address}</td>
                        <td className='border-dark border-2'>{ktp[0].PostCode}</td>
                        <td onClick={handleShow} className='border-dark border-2'>{ktp[0].Income}</td>
                        <td className='border-dark border-2'>{ktp[0].Status}</td>
                        <td>
                            <div className='d-flex'>
                                <p className='bg-danger mx-auto my-auto rounded px-3 text-light'>Cancel</p>
                                <p className='bg-success mx-auto my-auto rounded px-3 text-light'>Approve</p> 
                            </div>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td className='border-dark border-2'>{ktp[1].number}</td>
                        <td className='border-dark border-2'>{ktp[1].NameKTP}</td>
                        <td className='border-dark border-2'>{ktp[1].Address}</td>
                        <td className='border-dark border-2'>{ktp[1].PostCode}</td>
                        <td onClick={handleShow} className='border-dark border-2'>{ktp[1].Income}</td>
                        <td className='border-dark border-2'>{ktp[1].Status}</td>
                        <td>
                            <div className='d-flex'>
                                <p className='bg-success mx-auto my-auto rounded px-3 text-light'>Approve</p> 
                            </div>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td className='border-dark border-2'>{ktp[2].number}</td>
                        <td className='border-dark border-2'>{ktp[2].NameKTP}</td>
                        <td className='border-dark border-2'>{ktp[2].Address}</td>
                        <td className='border-dark border-2'>{ktp[2].PostCode}</td>
                        <td onClick={handleShow} className='border-dark border-2'>{ktp[2].Income}</td>
                        <td className='border-dark border-2'>{ktp[2].Status}</td>
                        <td>
                            <div className='d-flex'>
                                <p className='bg-danger mx-auto my-auto rounded px-3 text-light'>Cancel</p>
                            </div>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td className='border-dark border-2'>{ktp[3].number}</td>
                        <td className='border-dark border-2'>{ktp[3].NameKTP}</td>
                        <td className='border-dark border-2'>{ktp[3].Address}</td>
                        <td className='border-dark border-2'>{ktp[3].PostCode}</td>
                        <td onClick={handleShow} className='border-dark border-2'>{ktp[3].Income}</td>
                        <td className='border-dark border-2'>{ktp[3].Status}</td>
                        <td>
                            <div className='d-flex'>
                                <p className='bg-warning mx-auto my-auto rounded px-3 text-light'>On Progress</p> 
                            </div>
                        </td>
                    </tr>
                    </table>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
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
                                <div className="col d-grid mx-2">
                                    <img className='mx-auto' src={logo} alt="" />
                                    <img className='my-2 mx-auto' src={qr} alt="" />
                                    <p className='text-info text-center bg-opacity-25 bg-info'>On The Wayt</p>
                                    <div className="d-flex t-red justify-content-between">
                                        <p><b>Sub Total</b></p>
                                        <p>:</p>
                                        <p>Rp. 69.000</p>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
            </Modal>
        </div>
    )
}
export default Income;