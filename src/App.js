import React from 'react';
import './App.css';
import SidenavHeader from './components/SidenavHeader';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <div className="App">
      <SidenavHeader/>
      <HomeSection/>
      <AboutSection/>
      <ExperienceSection/>
      <EducationSection/>
      <PortfolioSection/>
      <a href="#home" className="back-to-top mr-md-4">
                    <i className="fas fa-arrow-up"></i>
                </a>
      <footer className="footer">
        <div className="container">
            <div className="nav-item">
                <a className="btn btn-outline-light" href="https://github.com/Gillermin/my-profile" rel="noopener noreferrer" target="_blank">
                    &nbsp;<i className="fab fa-github"></i>&nbsp; By Melvin Salazar
                </a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
