import React from 'react';
import './Business.css';

const Business = ({ business }) =>{
    return (
        <div className="Business" onClick={ () => window.location.href = business.url } >
            <div className="image-container">
                <img src={ business.imageSrc } alt='the restaurant'/>
            </div>
            <h2>{ business.name.split('-').join(' ') }</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{ business.address }</p>
                    <p>{ business.city }</p>
                    <p>{ business.state + business.zipCode }</p>
                </div>
                <div className="Business-reviews">
                    <h3>{ business.category }</h3>
                    <h3 className="rating">{ business.rating }</h3>
                    <p>{ business.reviewCount + 'reviews' }</p>
                </div>
            </div>
        </div>
    )
}

export default Business;