import React, { Component } from 'react';
import './SidenavHeader.scss';

class SidenavHeader extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);  
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onCurrentSection = false;
    handleScroll = () => {
        this.progressIndicator();
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementsByClassName('back-to-top')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('back-to-top')[0].style.display = 'none';
        }
    }
    progressIndicator = () =>  {
        var winScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }
    
    render(){
        return (
            <header>
                <div className="progress-container">
                    <div className="progress-bar" id="progressBar"></div>
                </div>
                <nav className="navbar fixed-top font-weight-bold">
                    <div className="navbar-brand p-2"></div>
                    <button className="navbar-toggler hidden-lg-up mr-md-4" type="button" data-toggle="collapse" data-target="#navbarContent"
                            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    &nbsp;<i className="fas fa-home"></i>&nbsp;&nbsp; Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    &nbsp;<i className="fas fa-info-circle"></i>&nbsp;&nbsp; About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">
                                    &nbsp;<i className="fas fa-laptop-code"></i>&nbsp; Experience
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#education">
                                    &nbsp;<i className="fas fa-user-graduate"></i>&nbsp;&nbsp; Education
                                </a>
                            </li>
                            <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">
                                        &nbsp;<i className="fas fa-briefcase"></i>&nbsp;&nbsp; Portfolio
                                    </a>
                                </li>
                        </ul>
                    </div>
                </nav>
                <nav className="sidenav"></nav>
            </header>
        );
    }
}

export default SidenavHeader;