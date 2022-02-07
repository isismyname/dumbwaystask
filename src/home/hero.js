import React from 'react';
import img from '../img/jumbotron.png'

function hero(){
    return(
        <div className="container my-5">
            <div className="d-flex my-auto rounded red mx-auto">
                <div className="w-50 mx-5 my-5 text-white">
                    <p className='fs-1 fw-bold'>WAYSBUCKS</p>
                    <p className='fs-4'>Things are changing, but we're still here for you</p>
                    <p className='w-75 text-justify'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <span className='fw-bold'>WaysBucks</span> Drivers is also avaible</p>
                    <p>Let's Order...</p>
                </div>
                    <img className='index my-3 rounded' src={img} alt="best" />
            </div>
        </div>
    )
}

export default hero;