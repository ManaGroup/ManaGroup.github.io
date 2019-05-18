import React, { Component } from 'react';

class App extends Component {


    constructor(props) {
        super(props);
        // this.IMG =props.image;
        this.container = [
            <div className={"st-width"}>
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: !props.responsiveMode ? 'flex-start' : 'center'
                }} >
                    {!props.responsiveMode && props.flipBg && props.bg && <img src={props.bg} alt="" style={{
                        width: '40%', paddingTop: '30px',
                        position: 'absolute', right: 0, top: 0,
                    }} />}
                    <p className="qsbrBold header-title" style={{ lineHeight: '40px' }}>{props.title}</p>
                    <p className="qsbr " style={{ fontSize: '20px', textAlign: !props.responsiveMode ? 'left' : 'center' }}>{props.description}</p>
                    {!props.responsiveMode && !props.flipBg && props.bg && <img src={props.bg} alt="" style={{
                        width: '40%', paddingTop: '30px',
                    }} />}
                </div>
            </div>
            ,
            <div style={{width:'70%'}}  >
                
                {
                    (() => {
                        const M = props.image;
                        return <M />
                    })()
                }
            </div>
        ];
        props.flip && (this.container = this.container.reverse())
        props.responsiveMode && (this.container = this.container.reverse())
    }


    render() {
        return (
            <div
                className="d-f-c-c"
                style={{ justifyContent: 'space-between', paddingTop: this.props.responsiveMode ? '0px' : '100px', paddingBottom: '100px', }}>
                {this.container}
            </div>
        )
    }
}
export default App;