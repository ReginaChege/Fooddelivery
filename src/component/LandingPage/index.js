import React from "react";
import './style.css'
import sandwitch from './sandwitch.png'

const LandingPage=()=>{
    return(
        <div className="landpage">
            <div>
                <p className="food">All fast food 
           <br/>Available at Foodie</p>
           <p>We Are Just A Click Away When You <br/>Crazy For Delicious Fast Food</p>
           <button>Buy Now</button>
           <button>How To Order</button>
                </div>
            <div>
                <img src={sandwitch}></img>
            </div>
            </div>
    )
}
export default LandingPage;