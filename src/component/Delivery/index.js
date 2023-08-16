import React from "react";
import './style.css'
import bugger from './bugger.png'
import frenchfries from './frenchfries.jpeg'
import pizzaslice from './pizzaslice.jpg'

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
            <img src={bugger} className="bugger"></img>
            <p>Chicken Burger</p>
            <a href="order now">Order Now</a>
        </div>
        <div>
            <img src={pizzaslice} className="pizza"></img>
            <p className="chicken">Chicken Pizza</p>
            <a href="order now" className="chicken">Order Now</a>
        </div>
        <div>
            <img src={frenchfries} className="frenchfries"></img>
            <p>French Fries</p>
            <a href="order now">Order Now</a>
        </div>
        </div>
        
    </div>
)
}
export default Delivery 