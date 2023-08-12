import React from "react";
import { Link } from 'react-router-dom';
import Images from './images/profile.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="container">
            <div className="home">
                <div className="photo">
                    <img className="pic" alt="Riya" src={Images}></img>
                </div>
                <div className="detail">
                    <h1>RIYA GUPTA</h1>
                    <p>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                    <div>
                        <ul>
                            <li><Link to="facebook.com"><FaFacebook /></Link></li>
                            <li><Link to="instagram.com"><FaInstagram /></Link></li>
                            <li><Link to="twitter.com"><FaTwitter /></Link></li>
                            <li><Link to="github.com"><FaGithub /></Link></li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Home;