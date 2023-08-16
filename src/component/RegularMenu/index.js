import React from "react";
import './style.css'


const RegularMenu=()=>{
return(
    <div>
        <div className="menu">
            
        <h1>Our <span>Regular</span> Menu</h1>
            
                <p>These Are Our Regular Menus You Can<br/>Order Anything Like </p>
           <div/>
            <div>
                <button>See All</button>
            </div>
            </div>
       
        <div className="regular">
            <div>
                <img></img>
                <p>Chicken Burger</p>
                <p></p>
                <div>
                <div>
                    <p>$3.50</p>
                </div>
                </div>
                <div className="buynow">
                    <button>Buy Now</button>
                </div>
              
            </div>
        </div>
        <div>
            <div>
                <img></img>
                <p>Chicken Burger</p>
                <p></p>
                <div>
                <div>
                    <p>$3.50</p>
                </div>
                </div>
                <div className="buynow">
                    <button>Buy Now</button>
                </div>
              
            </div>
        </div>
       
        </div>

)
}

export default RegularMenu;