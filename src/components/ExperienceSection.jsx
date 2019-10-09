import React, { Component } from 'react';
import './ExperienceSection.scss';
import Timeline from './Timeline';

class ExperienceSection extends Component {
    render(){
        return (
            <section id="experience" className="p-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="title">
                                <h2><b>Experience</b></h2>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            {/* Experience or Education */}
                            <Timeline child="Experience"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExperienceSection;