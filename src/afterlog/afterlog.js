import React from 'react';
import HeaderA from '../afterlog/headerafter';
import Hero from '../home/hero';
import Pro from '../home/pro';
import {Link} from 'react-router-dom';

export function afterlog(){
    return(
    <div>
        <HeaderA/>
        <Hero/>
        <Link className='text-decoration-none link-dark' to='/menu'>
            <Pro/>
        </Link>
        </div>
    )
}
export default afterlog;