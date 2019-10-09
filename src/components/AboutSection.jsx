import React, { Component } from 'react';
import './AboutSection.scss';
import { AboutSkills } from '../assets/data/AboutSkills';
import aboutImage from '../assets/images/aboutSection.png';

export default class AboutSection extends Component {
    constructor(){
        super();
        this.state = {
            AboutSkills
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);  
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onCurrentSection = false;
    handleScroll = () => {
        var offsetAboutSection = document.getElementById('about').offsetTop;
        var offsetExperienceSection = document.getElementById('experience').offsetTop;
        if( Math.max(document.body.scrollTop, document.documentElement.scrollTop) >= offsetAboutSection && Math.max(document.body.scrollTop, document.documentElement.scrollTop) < offsetExperienceSection ) {
            if(!this.onCurrentSection)
                this.setPercentageValues();    
            this.onCurrentSection = true; 
        }
        else{
            if( Math.max(document.body.scrollTop, document.documentElement.scrollTop) < 1){
                if(this.onCurrentSection)
                    this.setPercentageValues(true);
                this.onCurrentSection = false; 
            }
        }    
    };

    setPercentageValues = (reset=false) =>{
        var elements = document.getElementsByClassName('cont');
        var circles = document.getElementsByClassName('bar');
        Array.prototype.forEach.call(circles, (e,i) => {
            var val = reset ? 0 : elements[i].getAttribute('data-value');
            var r = circles[i].getAttribute('r');
            var c = Math.PI*(r*2);
        
            if (val < 0) { val = 0;}
            if (val > 100) { val = 100;}
            
            var pct = ((100-val)/100)*c;

            circles[i].style.strokeDashoffset = pct;
            elements[i].setAttribute('data-pct',val);
        });   
    };   

    render(){
        const AboutSkills = this.state.AboutSkills.map((skill,i)=>{
            return(
                <div key={i} className="cont" data-pct="0" data-value={skill.value} data-title={skill.title}>
                    <svg id="svg" width="200" height="200" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" ></circle>
                        <circle className="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48"></circle>
                    </svg>
                </div>
            )
        });

        return (
        <section id="about" className="p-4 sectionColor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="title">
                            <h2><b>About me</b></h2>
                        </div>
                        <img className="aboutImage my-3" src={aboutImage} alt="" />
                    </div>
                    <div className="col-sm-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis. Adipisci dolorem ipsa obcaecati perferendis a cupiditate omnis nostrum doloremque dicta. Atque repellendus nesciunt quasi asperiores nihil dolorem aliquam optio.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis. Adipisci dolorem ipsa obcaecati perferendis a cupiditate omnis nostrum doloremque dicta. Atque repellendus nesciunt quasi asperiores nihil dolorem aliquam optio.</p>
                        <div className="row">
                            {AboutSkills}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

