import React from 'react';
import sanjay from '../../img/sanjay.jpg';

const ImageSection = () => {
    return (
        <div className = "ImageSection">
            <div className = "img">
                <img src = {sanjay} alt = ""/>
            </div>
            <div className = "about-info">
                <h4>I am <span>Sanjay Shrestha</span></h4>
                <p className = "about-text">i like to play football and like to study more to know about my knowledge of coures.</p>
                <div className = "about-details">
                    <div className = "leftsection">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Country</p>
                        <p>Phone</p>
                    </div>
                    <div className = "rightsection">
                        <p> : Sanjay</p>
                        <p> : 25</p>
                        <p> : Nepali</p>
                        <p> : Nepal</p>
                        <p> : 9845782586</p>
                    </div>
                </div>
                <button className = "btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection
