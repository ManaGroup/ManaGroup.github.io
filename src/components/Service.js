import React, { Component } from 'react';

class App extends Component {
  

    constructor(props) {
        super(props);
       
        this.container=[
            <div className={"st-width"}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}} >
                {props.flipBg && props.bg && <img src={props.bg} alt="" style={{width: '40%',paddingTop: '30px',
            
            position: 'absolute',
right: 0,
top: 0,
            }} />}
                <p className="qsbrBold" style={{fontSize:'30px',lineHeight:'40px'}}>{props.title}</p>
                <p className="qsbr" style={{fontSize:'20px'}}>{props.description}</p>
                {!props.flipBg && props.bg && <img src={props.bg} alt="" style={{width: '40%',paddingTop: '30px',
    

            
            }}/>}
            </div>
        </div>
        ,
        <div className={"st-width"}>
            <img src={props.image} alt=""/>
        </div>
        ];
        props.flip &&(this.container=this.container.reverse())
    }
    

  render() {
    return (
        <div style={{paddingTop:'100px',paddingBottom:'100px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            {this.container}
        </div>
    )
  }
}
export default App;