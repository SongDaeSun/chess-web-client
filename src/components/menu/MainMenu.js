// import base React system
import React, {Component} from 'react';
import './MainMenu.css';

//import material-ui for beautiful front


//import AWS modules




class MainMenu extends Component{
    render (){
        return (
            <span className="MainMenu">
                <div variant="contained" color="primary" className="mainButton">
                    Combat
                </div>

                <div variant="contained" color="primary" className="mainButton">
                    Deck Building
                </div>

                <div variant="contained" color="primary" className="mainButton">
                    Shop
                </div>

            </span>
        );
    }   
}

export default MainMenu;