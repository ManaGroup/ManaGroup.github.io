import React from 'react';
import {connect} from 'react-redux';
import BaseComponent from './BaseComponent';

import Banner       from '../assets/images/dekstop/header.svg'
import ManaLogo     from '../assets/images/dekstop/logo.svg'
import About        from '../assets/images/dekstop/about.svg'
import Contact      from '../assets/images/dekstop/contact.svg'
import Clients      from '../assets/images/dekstop/clients.svg'
import ManaBgBlue   from '../assets/images/dekstop/mana-bg-blue.svg'
import ManaBgBrown  from '../assets/images/dekstop/mana-bg-brown.svg'



import Service_UI from '../assets/images/dekstop/ui.svg'
import _UI from '../assets/images/dekstop/ui.js'
import Service_UX from '../assets/images/dekstop/ux.svg'
import _UX from '../assets/images/dekstop/ux.js'
import Service_DV from '../assets/images/dekstop/develop.svg'
import _DV from '../assets/images/dekstop/develop.js'
import Service_VP from '../assets/images/dekstop/voip.svg'
import _VP from '../assets/images/dekstop/voip.js'

import Service from './Service'

const _WITH_=627;
const windowWidth=window.innerWidth;
const traingleHeight=70;

class Home extends BaseComponent {

    render() {
        return (
            <div className="home">
                {/* Logo */}
                <div className="p-20" style={{display:'flex',flexDirection:'row',backgroundColor:'#fcf8f5'}}>
                   <div className="container">
                    <img src={ManaLogo} alt=""/> 
                   </div>
                </div>
                {/* Banner */}
                <div className="p-20" style={{position:'relative',backgroundColor:'#fcf8f5',height: '573px'}} >
                    <div className="container" style={{height: '600px',display:'flex',flexDirection:'row',position:'relative'}} >
                        <div className={"st-width"} 
                            style={{
                                
                                marginTop: '-50px',
                                textAlign: "center",lineHeight: 1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                            <p style={{fontSize:'50px',lineHeight:'70px'}}>
                                DIGITAL TRANSFORMATION
                            </p>
                            <p className='qsbr' style={{fontSize:'30px',marginTop: '-15px'}}>
                                Not Just a Fancy Word
                            </p>
                            <input className='qsbr' type="button" value="Tell Me More" style={{
                                borderRadius: '5px',
                                border: 'none',
                                backgroundColor: 'rgb(201, 152, 103)',
                                height: '76px',
                                width: '206px',
                                fontFamily: 'qsbr',
                                fontSize: '20px',
                                color: 'white',
                                cursor:'pointer',

                            }}/>
                        </div>
                        <div className={"st-width"}>
                            <img className={"st-width"} src={Banner} alt="" />
                        </div>
                       
                    </div>
                    <svg height={traingleHeight} width={windowWidth} style={{position:'absolute',bottom:'0px',left:'-20px'}}>
                            <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-white" />
                    </svg>
                </div>
                {/* pakt */}
                <div className="p-20 container">
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{fontSize:'50px'}}>
                        WE ARE HERE TO MAKE A PACT
                        </p>
                    </div>
                    <div className="qsbr" style={{display:'flex',flexDirection:'row',}} >
                        <div className={"st-width"}>
                            <img className={"st-width"} src={About} alt="" />
                        </div>
                        <div className={"st-width"}>
                            <img className={"st-width"} src={ManaBgBrown} alt="" style={{position:'absolute',right:'0px',top:`${_WITH_/3}px`}} />
                            <p style={{lineHeight:'30px',fontSize:'15px',margin:'50px',width:'500px',textAlign:'left'}}>
                            You probably have witnessed the digital age, changing every aspect of our lives (or at least you have heard about it, right?). Before this era, Businesses had to try out all the time and budget consuming ways to reach, attract and satisfy customers, and customers also struggled with finding the right product or service, that is just made for them and their needs. Today customers has several options availabe to them on online platforms, that allow them to compare and make a better decision, if a business is not online, then its not an option. Mana Group helps you to step towards digitalization and use innovation and technlogy to enhance your business. We call our method of working, “Proffesual” as in, “Proffesionally casual”. Let’s start a journy towards digital transformation together and we guarantee we will stick to you, ups and downs, thick and thin.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Service */}
                <div className="qsbr p-20 container ">
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p className="debussy" style={{fontSize:'50px'}}>
                        OUR SERVICES
                        </p>
                    </div>

                    <_UX/>

                    <Service
                        title={`Software Development`}
                        description={`Dont mind the tk,tk,tk sound, its just our developers working super hard to bring your ideas to reality.`}
                        bg={ManaBgBlue}
                        image={_DV}

                    />

                     <Service
                        title={`User Exprience Design`}
                        description={`Fun Fact: every dollar invested in UX returns $10 to $100. SO… DONT EVEN RISK IT. Your users deserve an experience as easy and fun as your product. `}
                        image={_UX}
                        flip
                    />
                    
                    <Service
                        title={`User Interface Design`}
                        description={`Another Fun Fact: the first judgment always comes from the look of things. make your first impression count by creating a beautiful and intuitive product.`}
                        image={_UI}
                        
                    />
                     <Service
                        title={`VoIP Solutions `}
                        description={`E-commerce sale is hard. Analyics, rates, ROl and etc. Don’t worry though, you dont have to do it alone. we got you covered. after all thats what friends are for.  `}
                        image={_VP}
                        bg={ManaBgBrown}
                        flip
                        flipBg
                    />  
                    
                </div>
                
                <svg height={traingleHeight} width={windowWidth} style={{position:'relative',bottom:'-10px',left:'0px',borderBottom: '1px solid #1862b5;'}}>
                            <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-blue" />
                </svg>
                <div className="p-20" style={{backgroundColor:'#1862b5'}}>
                    <div style={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingBottom:'50px'}}>
                        <p style={{fontSize:'30px'}}>
                            Are you Ready to take this friendship to the next level?
                        </p>
                        <p style={{fontSize:'30px'}}>
                            Give us your info and we will get in touch
                        </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <div style={{width:'444px'}}>''
                            <img style={{width:'444px'}} src={Contact} alt=".." />
                        </div>
                        <div style={{width:'500px'}}>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <input id="name" className="inputs" type="text"  placeholder="Your Name" />
                                <input id="phone" className="inputs" type="text"  placeholder="Your Phone Number" />
                            </div>
                            <div style={{display:'flex',flexDirection:'row',paddingTop:'20px'}}>
                                <input id="email" type="text"  placeholder="Your Email Address *" 
                                style={{
                                    padding: '10px',
                                    margin: '5px',
                                    width: '700px' ,
                                    height: '76px' ,
                                    borderRadius: '5px',
                                    borderWidth: '0px',
                                
                                }} />
                                <input 
                                
                                onClick={()=>{
                                    if(
                                        !document.getElementById('email').value 
                                    ){
                                        alert('please fill all form data ')
                                        return ;
                                    }
                                    fetch('https://5.160.25.147:1414/api/register/email',{
                                        method:'POST',
                                        body:JSON.stringify({
                                            email:
                                            
                                            document.getElementById('name').value+":"+
                                            document.getElementById('phone').value+":"+
                                            document.getElementById('email').value
                                        })
                                    })
                                }}
                                className="inputs" 
                                type="button" 
                                value="Send" 
                                style={{
                                        borderRadius: '5px',
                                        border: 'none',
                                        backgroundColor: 'rgb(201, 152, 103)',
                                        height: '76px',
                                        width: '206px',
                                        fontFamily: 'qsbr',
                                        fontSize: '20px',
                                        color: 'white',
                                        cursor:'pointer',
                                    }}/>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);