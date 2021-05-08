// import base React system
import React, {Component} from 'react';
import './Main.css';

//import components
import Navigator from '../../components/navigator/Navigator'
import MainMenu from '../../components/menu/MainMenu'

//import AWS modules
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);


class Main extends Component{
    render (){
        return (
            <div className="Main">
                <div className="Main-Header">
                    <Navigator/>
                </div>

                <div className="Main-Body">
                    <MainMenu className="MainMenu"/>
                </div>
            </div>
        );
    }   
}

export default withAuthenticator(Main);
