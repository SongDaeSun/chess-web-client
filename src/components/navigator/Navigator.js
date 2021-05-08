// import base React system
import React, {Component} from 'react';
import './Navigator.css';

//import redux store
import store from '../../store';

//import material-ui for beautiful front

//import AWS modules
import {AmplifySignOut} from '@aws-amplify/ui-react';

class Navigator extends Component{
    render (){
        return (
            <div className="Navigator">
                <span className="userName">
                    SongDaeSun
                </span>

                <span className="userGold">
                    <span> Gold:</span>
                    <span> 120</span>
                </span>

                <span className="userCrystal">
                    <span> Crystal:</span>
                    <span> 5000</span>
                </span>

                <span className="signOut">
                    <AmplifySignOut/>
                </span>
            </div>
        );
    }   
}

export default Navigator;