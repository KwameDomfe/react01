import React from 'react'
import hhh from '../../images/_partials/logos/kda_design_technologies_logo.jpg'

const MainFooterNav = () => {
  return (
    <nav id="navigation"
        className="grid gtc12 ggap1-00 
            container container90 pv1-00" 
        >
            
            <section id="footer__about_me"  
                className= "gc1s12 gr1s1  gc1s3-l  ba b--white-90 pa1-00"
                aria-label="projects" 
            >
                <div 
                    className="grid gtc12 ggap0-00 items-center" 
                    aria-hidden="False"
                >
                    <figure className="gc4s6 gc2s4-s flex  gc4s6-l
                        gr1s1-m gr1s1-l
                        items-center justify-center
                        mb2-00 mb0-00-s pv2-00-m mb2-00-l
                        pb0-00-l"
                    >
                        <img src={hhh} 
                            alt=""
                            className="br0-50 cover"
                        />
                    </figure> 
                    <div id="about_me" 
                        className="gc1s12 gc7s6-s gc7s6-m gc1s12-l gr2s1-l
                             tj"
                    >
                        <header className="pt0-00  ">
                            <h2 className="ttu tc">
                                <a className="white-90" href=""
                                    role="button" 
                                    aria-expanded="false"
                                >about me</a>
                            </h2>
                        </header>
                        <p className="lh-copy f1-00 white-90 i">
                            Kwame Domfe Appau is a trained architect who is specialized in Building Information Modelling.
                        </p>
                        
                        <p className="lh-copy f1-00 white-90 i">
                            He is also self-trained computer programmer providing full stack web develoment solutions to businesses large and small.
                        </p>
                    </div>
                    <nav id="m__socialMediaNav" 
                        className="gc1s12 
                            flex flex-column items-center justify-end 
                            w-100 
                            mv1-00 pv0-50 
                            bt bb b--white" 
                        tabIndex="0"
                    >
                        <ul id="social_media_list" 
                            className=" flex justify-between items-center 
                                w-100 ma0-00 pa0-00"
                        >
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <a href="" 
                                    title="Follow me on Twitter" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/twitter.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </a>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"
                            > 
                                <a href="" 
                                    title="Follow me on Facebook" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/facebook.svg" 
                                        alt="" 
                                        className="w1-00 white-90"
                                    />
                                </a>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <a href="" 
                                    title="Connect with me on LinkedIn" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img src="svgs/linkedin.svg" 
                                        alt="" 
                                        className="w1-00"
                                    />
                                </a>
                                
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <a href="" 
                                    title="Follow me on youtube" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/youtube.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </a>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"
                            > 
                                <a href="" 
                                    title="Get In Touch on WhatsApp" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/Whatsapp.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </a>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </section>

            <section id="footer__courses" 
                className="gc1s12 gr2s1 
                    gc1s6-m gc1s6-m 
                    gc4s6-l gr1s1-l
                    white-90
                    ba b--white-90 pa1-00" 
                aria-label="principles"
            >
                <div  id="" 
                    className="mb2-00 grid gtc1 gtc2-s w-100"
                    data-use-new="true"
                >
                    <nav aria-label="">
                        <hgroup>
                            <h2 className="ttu"
                            >
                                AEC Courses
                            </h2>
                        </hgroup>
                        <ul className="">
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""> 
                                    Autodesk Revit Architecture
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit Structures
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit MEP
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Naviswork Manage
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Dynamo
                                </a>
                            </li>
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href=""> 
                                    Python
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav aria-label="">
                        <hgroup>
                            <h2 className="ttu"
                            >
                                WEB DEV Courses
                            </h2>
                        </hgroup>
                        <ul className="">
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""> 
                                    Autodesk Revit Architecture
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit Structures
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit MEP
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Naviswork Manage
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Autodesk Dynamo
                                </a>
                            </li>
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href=""> 
                                    Python
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav aria-label="practice">
                        <header>
                            <h2 className="ttu white-90"
                            >
                                Discover
                            </h2>
                        </header>
                        <ul className="">
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href="{% url 'website:faqs">FAQs</a>
                            </li>
                            <li className="mb1-00 "><a  className="white-90" 
                                    href="{% url 'website:finance">Financing Options</a></li>
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href="{% url 'website:contact-me">Contact Me
                                </a>
                            </li>
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href="">Blog
                                </a>
                            </li>
                            <li className="mb1-00 ">
                                <a  className="white-90" 
                                    href="{% url 'website:download">Download
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                    <nav aria-label="practice">
                        <header>
                            <h2 className="ttu white-90"
                            >
                                Discover
                            </h2>
                        </header>
                        <ul className=""
                        >
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    FAQs
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Financing Options
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Contact Me
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="mb1-00 "
                            >
                                <a  className="white-90" 
                                    href=""
                                >
                                    Download
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                
            </section>

            <section id="recents" 
                className="gc1s12 gr3s1 flex flex-column
                    pa1-00
                    gc7s6-m gc10s3-l tracked-tight ba b--white-90" 

                role="tabpanel" 
                aria-label="people" 
                section-index=""
            >
                
                <div>
                    <header>
                        <h2 className="ttu white-90"
                        >
                            Recents
                        </h2>
                    </header>
                    <div 
                        className="grid h-100 gtc2 ggap1-00" 
                        aria-hidden="False"
                    >
                        
                        <div id=""
                            className="gr1s1 gc1s1 
                                gr1s1-s gc1s1-s 
                                
                                br1-00"  
                            data-use-new="true"
                        >                    
                            <figure className="">
                                <img src={hhh} 
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Revit Esentials
                                </figcaption>
                            </figure> 

                        </div>

                        <div id=""
                            className=" br1-00 gr2s1 gc1s1 gr1s1-s gc2s1-s "  
                            data-use-new="true"
                        >          
                            <figure className="">
                                <img src={hhh}
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Naviswork Essentials
                                </figcaption>
                            </figure>     
                        </div>

                        <div id=""
                            className=" br1-00 gr1s1 gc2s1 gr2s1-s gc1s1-s "  
                            data-use-new="true"
                        >
                            <figure className="">
                                <img src={hhh} 
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Dynamo Essentials
                                </figcaption>
                            </figure> 
                        </div>

                        <div id=""
                            className=" br1-00 gr2s1 gc2s1 gr2s1-s gc2s1-s "  
                            data-use-new="true"
                        >
                            <figure className="">
                                <img src={hhh}
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Python Esentials
                                </figcaption>
                            </figure>  
                        </div>
                    </div>
                </div>

            </section>

        </nav>
  )
}

export default MainFooterNav