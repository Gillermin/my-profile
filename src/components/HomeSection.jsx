import React, { Component } from 'react';
import './HomeSection.scss';
import profileImage from '../assets/images/profile.jpg';

class HomeSection extends Component {
    render(){
        return (
            <section id="home" className="homeSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-lg-3"></div>
                        <div className="col-md-10 col-lg-6">
                            <div className="profile">
                                <div className="profileImg"><img src={profileImage} alt=""/></div>
                                <h2 className="font-weight-bold">Melvin Salazar Sánchez</h2>
                                <h3 className="font-italic">Web Developer</h3>
                                <ul className="information my-3">
                                    <li><h6><b>Veracruz, Pital, San Carlos, Alajuela, Costa Rica</b></h6></li>
                                    <li><h6><b>Tel : </b><a href="tel:+(506) 89813808">+(506) 89813808</a></h6></li>
                                    <li><h6><b>Email : </b><a href="mailto:msalazars89@gmail.com"> msalazars89@gmail.com </a></h6></li>
                                </ul>
                                <div className="socialIcons my-3">
                                    <a href="https://www.facebook.com/Gillermin" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://wa.me/+50689813808" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                                    <a href="https://www.linkedin.com/in/melvinsalazar/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/Gillermin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeSection;