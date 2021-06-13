import React, {useEffect} from 'react';
import './portfolio.css';
import ReactPlayer from "react-player";
import { faBalanceScale, faBlog, faBox, faBoxOpen, faDumpsterFire, faFingerprint, faPencilRuler, faTools } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mentorship from "../../images/mentorship.svg"

const Portfolio = () => {

    useEffect(() => {
        AOS.init({duration:1000});
    },[]);

    return(    
        <>
                <div class="underheader">
                    <div class="underheaderdiv">
                    <h1 class="underheadertitle">I haven't met you, and this is crazy...</h1>
                    </div>
                    <div class="underheaderdiv">
                <h3 class="underheadertext">But if you want to learn more, then scroll down maybe</h3>
                    </div>   


                    </div>
                

                <img src={Mentorship} data-aos="zoom-in-down" class="mentorimg "></img>

            <div class="backgroundportfolio">
                
                <h1 class="startupproject">My Startup Projects</h1> 
                <div class="justmaxwidth">
                <p>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.</p>
                </div>
            </div>
            
            <div class="row">
                <div class="card" data-aos='fade-right'>

                    <h1 class="cardh1">Live Group Chat</h1>
                    <p  class="cardp">A group chat when everybody can ask about there problems and find someone who can help them. ;)</p>
                    <button href="/home" class="buttondisable" disabled><FontAwesomeIcon color="#c3073f" class="Indev" icon={ faTools }/>&nbsp; In development</button>

                </div>

                <div class="card" data-aos='fade-up'>

                    <h1 class="cardh1">GMW Kosovo</h1>
                    <p  class="cardp">Global Mentoring Kosovo asked for a website where it could present all women who run businesses.</p>
                    <button href="/home" class="buttondisable" disabled><FontAwesomeIcon color="#c3073f" class="Indev" icon={ faTools }/>&nbsp; In development</button>

                </div>

                <div class="card" data-aos='fade-left'>

                <h1 class="cardh1">IBEX</h1>
                <p  class="cardp">Ibex is a distributor of hygienic and auto cosmetic products who needed a website maintenance.</p>
                    <button class="buttondisable" onClick={() => window.open("https://ibex-ks.com")} >www.ibex-ks.com</button>
                    
                </div>

            </div>


            <div class="midbackground">

                <div class="alignmidbackground" data-aos='fade-up'>
                <h1 class="midbackgroundh1">My Programming Style</h1>
                </div>
                <div class="alignmidbackgroundp" data-aos='fade-up'>
                <p class="midbackgroundp">I strive to function as a catalyst and challenge you to grow as both a designer and a human. I care about the details and will encourage you to think, plan, and dream. These are the qualities I will bring to every conversation.</p>
                </div>
                </div>
               
            
                <div class="rowmid">

                

                    <div class="cardmid divradius">

                    <FontAwesomeIcon color="#c3073f" class="row4" icon={ faFingerprint }/>
                    <h2 class="newcardh1">Authenticity</h2>
                    <div class="maxdiv">
                    <h4 class="newcardh4">No sugar-coated critiques here. I care about your growth too much to not keep it real. We'll tear things down and rebuild them better, together.</h4>
                    </div>
                    </div>

                    <div class="cardmid divradius1">

                    <FontAwesomeIcon color="#c3073f" class="row4" icon={ faDumpsterFire }/>
                    <h2 class="newcardh1">Humility</h2>
                    <div class="maxdiv">
                    <h4 class="newcardh4">I don’t profess to be at the top of the design talent pool, because I know there is still much for me to master. Design is a moving target I'm hunting every day.</h4>
                    </div>
                        
                    </div>

                    

                </div>

                <div class="rowmid">

                <div class="cardmid divradius2 ">

                <FontAwesomeIcon color="#c3073f" class="row4" icon={ faBalanceScale }/>
                    <h2 class="newcardh1">Equality</h2>
                    <div class="maxdiv">
                    <h4 class="newcardh4">To me, you're more than just a mentee. You’re a designer — an industry peer. I’m not the only one teaching and you’re not the only one learning.</h4>
                    </div>
                        
                    </div>

                    <div class="cardmid divradius3 ">

                    <FontAwesomeIcon color="#c3073f" class="row4" icon={ faBoxOpen }/>
                    <h2 class="newcardh1">Transparency</h2>
                    <div class="maxdiv">
                    <h4 class="newcardh4">I don’t have all the answers, but I’m happy to point you towards useful resources and share what I've learned from my own personal design journey.</h4>
                    </div>
                        
                    </div>


                </div>

                

                
            

        

        </>
        )
}


export default Portfolio;