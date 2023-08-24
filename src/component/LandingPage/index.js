import React from "react";
import './style.css'

const LandingPage=()=>{
    return(
        <div className="landpage">
            <div>
                <p className="food">All fast food 
           <br/>Available at Foodie</p>
           <p>We Are Just A Click Away When You <br/>Crazy For Delicious Fast Food</p>
           <div className="but">
            <div>
            <button>Buy Now</button>
            </div>
            <div>
            <button>How To Order</button>
            </div>
           </div>
                </div>
            <div>
                <img src="/images/sandwitch.png"></img>
            </div>
            </div>
    )
}
export default LandingPage;