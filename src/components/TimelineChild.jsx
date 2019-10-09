import React, { Component } from 'react';
import './TimelineChild.scss';
import { TimelineChildEducation } from '../assets/data/TimelineChildEducation';
import { TimelineChildExperience } from '../assets/data/TimelineChildExperience';


class TimelineChild extends Component {
    
    constructor(props){
        super(props);
        this.state = (props.child === "Education")? {
            TimelineChild : TimelineChildEducation
        }:
        {
            TimelineChild : TimelineChildExperience
        };
    }

    render(){
        const TimelineChild = this.state.TimelineChild.map((child,i)=>{
            return(
                <article key={i} className="card card-outline">
                    <div className="card-heading icon"></div>
                    <div className="card-header">
                        <h4 className="cardHeader font-weight-bold">{child.cardHeader}</h4>
                    </div>
                    <div className="card-body">   
                        <h5 className="cardTitle font-italic">{child.cardTitle}</h5>
                        <h6 className="cardSubTitle">{child.cardSubTitle}</h6>
                        <p className="cardParagraph">{child.cardParagraph}</p>
                    </div>
                </article>
            )
        });

        return (
            <div>
                {TimelineChild}
            </div>
        );
    }
}

export default TimelineChild;