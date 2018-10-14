import React, { Component } from 'react';
import '@src/theme.css'
import ClassDetail from './ClassDetail'

export default class Find extends Component {
    constructor() {
        super();
        this.state = {
            classes: [ 'CS31', 'CS32', 'CS33', 'CS180', 'CS131', 'CS35L', 'CS111', 'CS161', 'CS133', 'CS151A', 'CS152B' ],
            selectedclass: 'CS31',
            showclass: false
        }
    }
    buildOptions() {
        var arr = [];

        for (let i = 0; i <= this.state.classes.length - 1; i++) {
            arr.push(<option key={i} selectedclass="{i}">{this.state.classes[i]}</option>)
        }

        return arr; 
    }
	render(){
		return(
            <div className="second-part">           
                <div className="welcome-message">FIND</div>
                    <div className="bottom-welcome-message"> Find new classmates! Select a class below. </div>
                     <div>
                        <select size="1" className="find-classes-selector">
                        {this.buildOptions()}
                    </select>
                    <button className="find-button"> ADD </button>
                </div>
            </div>
        );
    }   

}

