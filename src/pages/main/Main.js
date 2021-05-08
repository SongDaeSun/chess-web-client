// import base React system
import React, {Component} from 'react';
import './Main.css';

//import components
import Navigator from '../../components/navigator/Navigator'

//import Page Bodies
import MenuBody from  '../../page_bodies/menuBody/MenuBody'


//import AWS modules
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);


class Main extends Component{
    state = {bodyState:"MENU"}

    selectBody(bodyState){
        if(bodyState==="MENU"){
            return (<MenuBody bodyState={bodyState}/>)
        }
    }

    render(){
        return (
            <div className="Main">
                <div className="Main-Header">
                    <Navigator/>
                </div>

                <div className="Main-Body">
                    {this.selectBody(this.state.bodyState)}
                </div>
            </div>
        );
    }   
}

export default withAuthenticator(Main);
