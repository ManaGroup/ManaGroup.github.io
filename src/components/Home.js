import React from 'react';
import {connect} from 'react-redux';
import BaseComponent from './BaseComponent';

import Banner from '../assets/images/dekstop/header.svg'
import ManaLogo from '../assets/images/dekstop/logo.svg'
import About from '../assets/images/dekstop/about.svg'
import ManaBgBrown from '../assets/images/dekstop/mana-bg-brown.svg'
import ManaBgBlue from '../assets/images/dekstop/mana-bg-blue.svg'
import Contact from '../assets/images/dekstop/contact.svg'
import Clients from '../assets/images/dekstop/clients.svg'



import Service_UI from '../assets/images/dekstop/ui.svg'
import Service_UX from '../assets/images/dekstop/ux.svg'
import Service_DV from '../assets/images/dekstop/develop.svg'
import Service_VP from '../assets/images/dekstop/voip.svg'

import Service from './Service'

const _WITH_=627;
const windowWidth=window.innerWidth;
const traingleHeight=70;

class Home extends BaseComponent {

    render() {
        return (
            <div className="home">
             
                <div style={{display:'flex',flexDirection:'row',backgroundColor:'#fcf8f5'}}>
                   <img src={ManaLogo} alt=""/> 
                </div>

                <div style={{display:'flex',flexDirection:'row',backgroundColor:'#fcf8f5',position:'relative'}}>
                    <div className={"st-width"} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                        <p style={{fontSize:'50px'}}>
                            Digital transformation
                        </p>
                        <p className='qsbr' style={{fontSize:'30px'}}>
                            not just a fancy word
                        </p>
                        <input className='qsbr' type="button" value="tell me more" style={{backgroundColor:'#c99867',height:'76px',width:'256px'}}/>
                    </div>

                    <div className={"st-width"}>
                        <img  src={Banner} alt="" />
                    </div>
                    <svg height={traingleHeight} width={windowWidth} style={{position:'absolute',bottom:'0px'}}>
                            <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-white" />
                    </svg>
                </div>
                

                <div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p style={{fontSize:'50px'}}>
                            we are here to make a packt
                        </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',}} >
                        <div className={"st-width"}>
                            <img  src={About} alt="" />
                        </div>
                        <div className={"st-width"}>
                            <img  src={ManaBgBrown} alt="" style={{position:'absolute',right:'0px',top:`${_WITH_/3}px`}} />
                            <p style={{fontSize:'20px',margin:'20px'}}>
                            You probably have witnessed the digital age, changing every aspect of our lives (or at least you have heard about it, right?). Before this era, Businesses had to try out all the time and budget consuming ways to reach, attract and satisfy customers, and customers also struggled with finding the right product or service, that is just made for them and their needs. Today customers has several options availabe to them on online platforms, that allow them to compare and make a better decision, if a business is not online, then its not an option. Mana Group helps you to step towards digitalization and use innovation and technlogy to enhance your business. We call our method of working, “Proffesual” as in, “Proffesionally casual”. Let’s start a journy towards digital transformation together and we guarantee we will stick to you, ups and downs, thick and thin.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="qsbr">
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p className="debussy" style={{fontSize:'50px'}}>
                        our services
                        </p>
                    </div>


                    <Service
                        title={`Software development`}
                        description={`Dont mind the tk,tk,tk sound, its just our developers working super hard to bring your ideas to reality.`}
                        bg={ManaBgBlue}
                        image={Service_DV}

                    />

                    <Service
                        title={`User Exprience Design`}
                        description={`Fun Fact: every dollar invested in UX returns $10 to $100. SO… DONT EVEN RISK IT. Your users deserve an experience as easy and fun as your product. `}
                        image={Service_UX}
                        flip
                    />
                    
                    <Service
                        title={`User Exprience Design`}
                        description={`Another Fun Fact: the first judgment always comes from the look of things. make your first impression count by creating a beautiful and intuitive product.`}
                        image={Service_UI}
                        
                    />
                    <Service
                        title={`Growth Strategy `}
                        description={`E-commerce sale is hard. Analyics, rates, ROl and etc. Don’t worry though, you dont have to do it alone. we got you covered. after all thats what friends are for.  `}
                        image={Service_VP}
                        bg={ManaBgBrown}
                        flip
                        flipBg
                    />
                    
                </div>

                <div style={{position:'relative',display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#fcf8f5'}}>
                    <div style={{width:'770px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                        <p style={{fontSize:'30px'}}>
                            there are some businesses that growth with us
                        </p>
                        <p style={{fontSize:'30px'}}>
                            join the party
                        </p>
                    </div>

                    <div className={"st3-width"}>
                        <img  src={Clients} alt="" />
                    </div>
                    <svg height={traingleHeight} width={windowWidth} style={{position:'absolute',top:'0px'}}>
                            <polygon points={`0,0 0,${traingleHeight} ${traingleHeight},${windowWidth} `} class="triangle-white" />
                    </svg>
                    <svg height={traingleHeight} width={windowWidth} style={{position:'absolute',bottom:'0px',borderBottom: '1px solid #1862b5;'}}>
                            <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-blue" />
                    </svg>
                    
                </div>

                
                <div style={{backgroundColor:'#1862b5'}}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
                        <p style={{fontSize:'30px'}}>
                            Are you Ready to take this friendship to the next level?
                        </p>
                        <p style={{fontSize:'30px'}}>
                            Give us your info and we will get in touch
                        </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <div>
                            <img src={Contact} alt=".." style={{width:'344px'}}/>
                        </div>
                        <div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <input type="text" value="" placeholder="Your Name" style={{width:'344px',height:'76px'}}/>
                                <input type="text" value="" placeholder="Your Phone Number" style={{width:'344px',height:'76px'}}/>
                            </div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <input type="text" value="" placeholder="Your Email Address" style={{width:'344px',height:'76px'}}/>
                                <input type="button" value="Send" style={{width:'344px',height:'76px',backgroundColor:'#fcf8f5'}}/>
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