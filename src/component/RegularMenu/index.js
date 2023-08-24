import React from 'react';
import './style.css';

const RegularMenu = () => {
    const images = [
        'images/buggerchilli.jpg',
        'images/pizza.jpg',
        'images/chicken.jpg',
        'images/grilled sandwitch.png',
        'images/tacco.jpg',
        'images/vegetable soup.jpg',
    ];
    const item = [
        'Chicken Burger',
        'Chicken Pizza',
        'Chicken Fry',
        'Grilled Sandwitch',
        'Taco Traifi',
        'Noddles Ramen',
    ];
    
    return (
        <div className="regular">
            <div className="container">
                <div>
                    <div> 
                        <h1>Our <span className="regulaar">Regular </span>Menu</h1>
                        <p>These Are Our Regular Menus. You Can Order Anything You Like</p>
                    </div>
                    <div className="col-md-4">
                        <button type="button" class="btn">See All</button>
                    </div>
                </div>
            </div>
            <div className="map">
                {images.map((image, index) => (
                    <div className="menu-item" key={index}>
                        <img src={image} alt="Product" className="product" />
                        <div className="product-details">
                            <h1>{item[index]}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RegularMenu;
