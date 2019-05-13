import React from 'react';
import {connect} from 'react-redux';
import {Switch, Redirect, Route} from 'react-router-dom';
import BaseComponent from './BaseComponent';
import NotFound from './NotFound'
import Home from './Home'
import '../assets/bootstrap/css/grid.min.css'
import '../assets/scss/app.scss'

class App extends BaseComponent {

   

    render() {
        return (
            <div className="App">
                <div className="main-container">
                    <div className="">
                        <Switch>
                            <Route exact path={"/"}     render={() => (<Home/>)}/>
                            <Route       path={"*"}     render={() => (<NotFound/>)}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);