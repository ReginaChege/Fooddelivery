import React from "react";
import './style.css'
const Delivery=()=>{
return(
    <div>
        <div className="two">
        <div>
            <h1>Best <span className="deliver">Delivery</span>
            <br/>Catergory</h1>
        </div>
        <div>
            <p>Here Are Some Of Our Best Distributed
                <br/> Catergory,If You Want You Can Order<br/>From Here
            </p>
        </div>
        </div>
        <div className="three">
            
        <div>
            <img src="/images/bugger.png"className="buggerr"></img>
            <p className="chickenn">Chicken Burger</p>
            <a href="order now" className="chickenn">Order Now</a>
        </div>
        <div>
            <img src="/images/pizzaslice.png" className="pizza"></img>
            <p className="chicken">Chicken Pizza</p>
            <a href="order now" className="chicken">Order Now</a>
        </div>
        <div>
            <img src="/images/frenchfries.jpeg" className="frenchfries"></img>
            <p>French Fries</p>
            <a href="order now">Order Now</a>
        </div>
        </div>
        
    </div>
)
}
export default Delivery 