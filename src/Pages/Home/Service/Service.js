import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, description, name, time, price } = service;
    console.log(service);
    return (
        <div className="service">
            <img src={img} alt=".." />
            <div className="p-3">
                <h2>{name}</h2>
                <h5>Price: {price}</h5>
                <h6>Time: {time}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;