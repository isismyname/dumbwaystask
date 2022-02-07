import React from 'react';
import Hero from "./hero";
import Header from './header';
import Pro from "./pro";

function homepage(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Pro/>
        </div>
    )
}
export default homepage;