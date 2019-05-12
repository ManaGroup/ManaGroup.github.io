import React, { Component } from 'react';

class App extends Component {
  

    constructor(props) {
        super(props);
       
        this.container=[
            <div className={"st2-width"}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}} >
                {props.flipBg && props.bg && <img src={props.bg} alt="" />}
                <p className="QSBRBold" style={{fontSize:'30px'}}>{props.title}</p>
                <p style={{fontSize:'20px'}}>{props.description}</p>
                {!props.flipBg && props.bg && <img src={props.bg} alt="" />}
            </div>
        </div>
        ,
        <div className={"st2-width"}>
            <img src={props.image} alt=""/>
        </div>
        ];
        props.flip &&(this.container=this.container.reverse())
    }
    

  render() {
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {this.container}
        </div>
    )
  }
}
export default App;