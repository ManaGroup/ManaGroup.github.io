import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from './BaseComponent';

import Banner from '../assets/images/dekstop/header.svg'
import ManaLogo from '../assets/images/dekstop/logo.svg'
import ManaLogoPNG from '../assets/images/dekstop/logo.png'
import About from '../assets/images/dekstop/about.svg'
import Contact from '../assets/images/dekstop/contact.svg'
import ManaBgBlue from '../assets/images/dekstop/mana-bg-blue.svg'
import ManaBgBrown from '../assets/images/dekstop/mana-bg-brown.svg'



import _UI from '../assets/images/dekstop/ui.js'
import _UX from '../assets/images/dekstop/ux.js'
import _DV from '../assets/images/dekstop/develop.js'
import _VP from '../assets/images/dekstop/voip.js'

import LINKEDIN from '../assets/images/dekstop/linkedin.svg'

import Service from './Service'

const RESPONSIVE_THRESHOLD = 992;
let windowWidth = window.innerWidth;
let responsiveMode = windowWidth < RESPONSIVE_THRESHOLD;
const traingleHeight = 70;

class Home extends BaseComponent {


    updateDimensions = () => {
        windowWidth = window.innerWidth;
        responsiveMode = windowWidth < RESPONSIVE_THRESHOLD;
        this.forceUpdate();
    }

    navToLnk=()=>{
        window.location='https://www.linkedin.com/company/managroupco/';
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="home">
                {/* Logo */}
                <div className="p-20" style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fcf8f5' }}>
                    <div className="container">
                        <img src={ManaLogoPNG} alt="" />
                    </div>
                </div>
                {/* Banner */}
                <div className="p-20" style={{ position: 'relative', backgroundColor: '#fcf8f5' }} >
                    <div className="container d-f-c-c"  >
                        <div className={"st-width d-f-c-c f-d-c"}
                            style={{ marginTop: '-50px', textAlign: "center", lineHeight: 1 }} >
                            <p className="header-title" style={{ lineHeight: '70px' }}>
                                DIGITAL TRANSFORMATION
                            </p>
                            <p className='qsbr' style={{ fontSize: '30px', marginTop: '-15px' }}>
                                Not Just a Fancy Word
                            </p>
                            {!responsiveMode && <input
                                onClick={() => {
                                    window.location = '#pact'
                                }}

                                className='qsbr' type="button" value="Tell Me More"
                                style={{
                                    borderRadius: '5px',
                                    border: 'none',
                                    backgroundColor: 'rgb(201, 152, 103)',
                                    height: '76px',
                                    width: '206px',
                                    fontFamily: 'qsbr',
                                    fontSize: '20px',
                                    color: 'white',
                                    cursor: 'pointer',
                                }} />}
                        </div>
                        <div className={"st-width"}>
                            <img className={"st-width"} src={Banner} alt="" />
                        </div>

                    </div>
                    <div style={{ height: '30px' }} />
                    <svg height={traingleHeight} width={windowWidth} style={{ position: 'absolute', bottom: '0px', left: '-20px' }}>
                        <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-white" />
                    </svg>
                </div>
                {/* pakt */}
                <div id="pact" className="p-20 container">
                    <div className="d-f-c-c">
                        <p className="header-title">
                            WE ARE HERE TO MAKE A PACT
                        </p>
                    </div>
                    <div className="qsbr d-f-c-c">
                        <div className={"st-width"}>
                            <img className={"st-width"} src={About} alt="" />
                        </div>
                        <div className={"st-width"}>
                            {!responsiveMode && <img src={ManaBgBrown} alt=""
                                style={{ position: 'absolute', width: '40%', right: '0px', bottom: '-35px' }} />}
                            <p style={{ lineHeight: responsiveMode ? '30px' : '35px', fontSize: responsiveMode ? '16px' : '20px', margin: responsiveMode ? '0px' : '50px', width: '100%', textAlign: responsiveMode ? 'center' : 'left' }}>
                                You probably have witnessed the digital age, changing every aspect of our lives (or at least you have heard about it, right?). Before this era, Businesses had to try out all the time and budget consuming ways to reach, attract and satisfy customers, and customers also struggled with finding the right product or service, that is just made for them and their needs. Today customers have several options availabe to them on online platforms, that allow them to compare and make a better decision, if a business is not online, then its not an option. Mana Group helps you to step towards digitalization and use innovation and technlogy to enhance your business. We call our method of working, “Proffesual” as in, “Proffesionally casual”. Let’s start a journy towards digital transformation together and we guarantee we will stick to you, ups and downs, thick and thin.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Service */}
                <div className="qsbr p-20 container ">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p className="debussy header-title" >
                            OUR SERVICES
                        </p>
                    </div>

                    <Service
                        title={`Software Development`}
                        description={`Dont mind the tk,tk,tk sound, its just our developers working super hard to bring your ideas to reality.`}
                        bg={ManaBgBlue}
                        image={_DV}
                        responsiveMode={responsiveMode}
                    />

                    <Service
                        title={`User Exprience Design`}
                        description={`Fun Fact: every dollar invested in UX returns $10 to $100. SO… DONT EVEN RISK IT. Your users deserve an experience as easy and fun as your product. `}
                        image={_UX}
                        flip
                        responsiveMode={responsiveMode}
                    />

                    <Service
                        title={`User Interface Design`}
                        description={`Another Fun Fact: the first judgment always comes from the look of things. make your first impression count by creating a beautiful and intuitive product.`}
                        image={_UI}
                        responsiveMode={responsiveMode}
                    />
                    <Service
                        title={`VoIP Solutions `}
                        description={`Never underestimate the power of a sweet conversation. We implement your service on telephone system to bring your customers a smooth and easy communication.  `}
                        image={_VP}
                        bg={ManaBgBrown}
                        flip
                        flipBg
                        responsiveMode={responsiveMode}
                    />

                </div>

                <svg height={traingleHeight} width={windowWidth} style={{ position: 'relative', bottom: '-10px', left: '0px', borderBottom: '1px solid #1862b5;' }}>
                    <polygon points={`0,0 0,${traingleHeight} ${windowWidth},${traingleHeight}`} class="triangle-blue" />
                </svg>
                {/* contact us */}
                <div style={{ width: '100%', backgroundColor: '#1862b5' }}>
                    <div className="container p-20">
                        <div style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
                            <p style={{ fontSize: '30px', textAlign: responsiveMode ? 'center' : 'left', lineHeight: responsiveMode ? '50px' : '0px' }}>
                                Are you Ready to take this friendship to the next level?
                            </p>
                            <p className="qsbr" style={{ fontSize: '30px', textAlign: responsiveMode ? 'center' : 'left' }}>
                                Give us your info and we will get in touch
                            </p>
                        </div>
                        <div className="st-width d-f-c-c">
                            {
                                !responsiveMode &&

                                <div className={'st-width'}>
                                    <img className={'st-width'} src={Contact} alt=".." />
                                </div>
                            }
                            <div className="_20per" />
                            <div className={responsiveMode?"_100per":"_60per"}>
                                <div className="d-f-c-c">
                                    <input id="name"   style={responsiveMode?{width:'100%'}:{}} className="inputs" type="text" placeholder="Your Name" />
                                    <input id="phone" className="inputs" style={responsiveMode?{width:'100%'}:{}} type="text" placeholder="Your Phone Number" />
                                </div>
                                <div className="d-f-c-c" style={!responsiveMode ? { paddingTop: '20px' } : {}}>
                                    <input
                                        className="inputs"
                                        id="email"
                                        type="text"
                                        placeholder="Your Email Address *"
                                        style={{
                                            padding: '10px',
                                            margin: '5px',
                                            width: responsiveMode?'100%':'550px',
                                            height: '76px',
                                            borderRadius: '5px',
                                            borderWidth: '0px',

                                        }} />
                                    <input

                                        onClick={() => {
                                            if (
                                                !document.getElementById('email').value
                                            ) {
                                                alert('please fill all form data ')
                                                return;
                                            }
                                            fetch('https://solabest.ddns.net:1414/api/register/email-mana', {
                                                method: 'POST',
                                                headers:{
                                                    'Content-Type':'application/json',
                                                    'Accept':'application/json'
                                                },
                                                body: JSON.stringify({
                                                    email:

                                                        document.getElementById('name').value + ":" +
                                                        document.getElementById('phone').value + ":" +
                                                        document.getElementById('email').value
                                                })
                                            }).then(() => {
                                                alert('Your Email Has Been Send. :)')
                                            }).catch(e=>alert('oops , there was some error :('))
                                        }}
                                        className="inputs trident"
                                        type="button"
                                        value="Send"
                                        style={{
                                            borderRadius: '5px',
                                            border: 'none',
                                            backgroundColor: 'rgb(201, 152, 103)',
                                            height: '76px',
                                            width: responsiveMode?'100%':'206px',
                                            fontFamily: 'qsbr',
                                            fontSize: '20px',
                                            color: 'white',
                                            cursor: 'pointer',
                                        }} />
                                </div>
                            </div>
                            {
                                responsiveMode &&

                                <div className={'st-width'} style={{ paddingTop: '50px' }}>
                                    <img className={'st-width'} src={Contact} alt=".." />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div style={{ backgroundColor: '#fcf8f5', width: '100%', }}>
                    <div className={`${responsiveMode?' ':' container'} d-f-c-c qsbr`} style={{ backgroundColor: '#fcf8f5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >



                        {
                            responsiveMode &&
                            <React.Fragment >
                                <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                    <p className=" p-20-20 bg-y qsbrBold">Address:</p>
                                    <p className=" p-20-20" style={{padding:'0px'}} >{`No 36,Esfandiar Blvd, Vali-E-Asr St,Tehran-Iran`}</p>
                                </div>

                                <div />

                                <div className={`d-f-c-c p-20-20  a-i-fs `} style={responsiveMode ? { flexDirection: windowWidth<350 ? 'column': 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>

                                    <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: windowWidth<350 ?'row': 'column', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                        <p className=" p-20-20 bg-y qsbrBold">Phone Number:</p>
                                        <p className=" p-20-20" >+9821 42473000</p>
                                    </div>

                                    <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: windowWidth<350 ?'row': 'column', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                        <p className=" p-20-20 bg-y qsbrBold">Email Address:</p>
                                        <p className=" p-20-20" >info@managroup.co</p>
                                    </div>


                                </div>

                                <div />

                            </React.Fragment>

                        }

                        {!responsiveMode &&
                            <React.Fragment>
                                <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                    <p className=" p-20-20 bg-y qsbrBold">Address:</p>
                                    <p className=" p-20-20" >{`No 36,Esfandiar Blvd, Vali-E-Asr St,Tehran-Iran`}</p>
                                </div>

                                <div />

                                <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                    <p className=" p-20-20 bg-y qsbrBold">Phone Number:</p>
                                    <p className=" p-20-20" >+9821 42473000</p>
                                </div>

                                <div />

                                <div className="d-f-c-c p-20-20 f-d-c a-i-fs mt20" style={responsiveMode ? { flexDirection: 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : {}}>
                                    <p className=" p-20-20 bg-y qsbrBold">Email Address:</p>
                                    <p className=" p-20-20" >info@managroup.co</p>
                                </div>

                                <div className="d-f-c-c p-20 f-d-c mt20" style={responsiveMode ? { flexDirection: 'row', padding: '0px', width: '100%', justifyContent: 'flex-start', textAlign: 'right' } : { position: 'absolute', right: '0px' }}>
                                    <img src={LINKEDIN} alt="" onClick={this.navToLnk} />
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>

                {
                    !responsiveMode && 
                    <div className="d-f-c-c" style={{ fontSize: '10px', backgroundColor: '#fcf8f5' }}>
                        <p className="qsbr">Made with ❤️ , 💪🏻 and ☕️ by Mana Group</p>
                    </div>
                }
                {
                    responsiveMode && 
                    <div style={{width:'100%',backgroundColor:'#fcf8f5',paddingBottom:'10px'}}>
                        <div  style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',fontSize: '10px', backgroundColor: '#fcf8f5' }}>
                            <img src={LINKEDIN} alt="" style={{paddingLeft:'10px'}} onClick={this.navToLnk} />
                            <p className="qsbr" style={{paddingRight:'10px'}}>Made with ❤️ , 💪🏻 and ☕️ by Mana Group</p>
                        </div>
                    </div>
                    
                }
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