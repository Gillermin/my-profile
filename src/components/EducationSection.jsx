import React, { Component } from 'react';
import './EducationSection.scss';
import Timeline from './Timeline';

class EducationSection extends Component {
    render(){
        return (
            <section id="education" className="p-4 sectionColor" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="title">
                                <h2><b>Education</b></h2>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            {/* Experience or Education */}
                            <Timeline child="Education"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EducationSection;