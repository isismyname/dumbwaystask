import React from 'react';
import im1 from '../img/kopi1.png'
import List from './Menupage';
import HeaderA from '../afterlog/headerafter';

function ListM(){ 
    const boba = [
        {
            nameB: "Ice Coffee Palm Sugar",
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
            <div className="container my-5 d-flex t-red">
                <div className='w-50 container-fluid'>
                    <img className='w-100 ' src={im1} alt="Kopi1" />
                </div>
                <div className="m-2 w-100">
                    <div className="title">
                        <h4 className='fs-1'> <b>{boba[0].nameB}</b> </h4>
                        <p className='fs-4'> {boba[0].priceB} </p>
                    </div>
                    <div>
                        <List className='mx-auto'               
                        nameT0={infoT[0].nameT}
                        nameT1={infoT[1].nameT}
                        nameT2={infoT[2].nameT}
                        nameT3={infoT[3].nameT}
                        nameT4={infoT[4].nameT}
                        nameT5={infoT[5].nameT}
                        nameT6={infoT[6].nameT}
                        nameT7={infoT[7].nameT}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListM;