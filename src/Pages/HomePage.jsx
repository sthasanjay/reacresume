import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
    return (
        <div className = "HomePage">
            <header className = "head">
                <h1 className = "head-text">
                    Hi, I am
                    <span> Sanjay Shrestha.</span>
                </h1>
                <p className="h-sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cupiditate facere, numquam vitae placeat consequatur corrupti officia 
                quibusdam. Blanditiis doloremque nemo ex facilis neque. 
                A sint ipsam earum nemo omnis et.
            </p>
            <div className="icons">
                <Link to="test" className="icon-holder">
                    <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                </Link>
                <Link to="test" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>
                <Link to="test" className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className="icon yt"/>
                </Link>
            </div>
            </header>
            
        </div>
    )
}

export default HomePage
