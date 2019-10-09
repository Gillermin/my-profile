import React, { Component } from 'react';
import './Timeline.scss';
import TimelineChild from './TimelineChild';

class Timeline extends Component {
    render(){
        return (
            <div className="timeline">
                <div className="line text-muted"></div>
                <TimelineChild child={this.props.child}/>
            </div>

        );
    }
}

export default Timeline;