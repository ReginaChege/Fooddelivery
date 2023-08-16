import React from "react";
import './style.css'
import balls from './balls.png'
import buggerdiscount from './buggerdiscount.png'
import icecream from './icecream.png'

const Offers=()=>{
    return(
        <div className="discount">
            <div>
                <img src={buggerdiscount} className="buggerdiscount"></img>
            </div>
            <div>
            <div>
                <img src={icecream} className="icecream"></img>
            </div>
            <div>
                <div>
                    <img src={balls} className="balls"></img>
               
                </div>
               
            </div>
            </div>
            
        </div>
    )
}
export default Offers;