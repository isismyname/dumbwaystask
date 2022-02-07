import React from 'react';
import List from './list';


function pro(){
    const info =[
        {
            name: "Ice Coffee Palm Sugar",
            price: "Rp. 27.000"
        },{
            name:"Ice Coffee Green Tea",
            price: "Rp. 31.000"
        },{
            name:"Hanami Latte",
            price: "Rp. 29.000"
        },{
            name:"Clepon Coffee",
            price: "Rp. 28.000"
        }
    ]
    return(
      <div className="container">
          <div className="text-danger p-3">
              <h3>Let's Order</h3>
          </div>
          <div className='p-3'>
            <List title={info[0].name} text={info[0].price}
            title2={info[1].name} text2={info[1].price}
            title3={info[2].name} text3={info[2].price} 
            title4={info[3].name} text4={info[3].price} />
          </div>
      </div>
    )
  }

  export default pro;