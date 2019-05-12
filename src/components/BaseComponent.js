import React,{Component} from 'react';


class BaseComponent extends Component {

   
    componentDidCatch(err,info){
        console.log(err)
    }
    
}

export default BaseComponent;