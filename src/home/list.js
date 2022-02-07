import React from 'react';
import imge1 from '../img/kopi1.png';
import imge2 from '../img/kopi2.png';
import imge3 from '../img/kopi3.png';
import imge4 from '../img/kopi4.png';

const list = (props)=>{
    return(
        <div className='d-flex justify-content-between'>
            <div className="card-group">
                <div className="cardi">
                    <img src={imge1} alt="kopi1" />
                    <div className="card-body">
                        <div className="card-title">
                            {props.title}
                        </div>
                        <div className="card-text">
                            {props.text}
                        </div>
                    </div>
                </div>
            </div>
                <div className="cardi">
                    <img src={imge2} alt="kopi2" />
                    <div className="card-body">
                        <div className="card-title">
                            {props.title2}
                        </div>
                        <div className="card-text">
                            {props.text2}
                        </div>
                    </div>
                </div>
                <div className="cardi">
                    <img src={imge3} alt="kopi3" />
                    <div className="card-body">
                        <div className="card-title">
                            {props.title3}
                        </div>
                        <div className="card-text">
                            {props.text3}
                        </div>
                    </div>
                </div>
                <div className="cardi">
                    <img src={imge4} alt="kopi4" />
                    <div className="card-body">
                        <div className="card-title">
                            {props.title4}
                        </div>
                        <div className="card-text">
                            {props.text4}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default list;