// import base React system
import React, {Component} from 'react';
import './MenuBody.css';
import MainMenu from '../../components/menu/MainMenu'

//import material-ui for beautiful front


//import AWS modules

class MenuBody extends Component{
    render (){
        return (
            <div className="MenuBody">
                <MainMenu bodyState={this.props.bodyState} className="MainMenu"/>
            </div>
        );
    }   
}

export default MenuBody;