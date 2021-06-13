import React, {useEffect} from 'react';
import './home.css';
import ReactPlayer from "react-player";
import { faBlog, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import pics from "../../images/profilepic.svg"
import pictures from "../../images/workstation.png"
import AOS from 'aos';
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import starlabs from "../../images/starlabs.png"
import ibex from "../../images/ibex.png"
import gmw from "../../images/gmw.png"




const Home = () => {

    useEffect(() => {
        AOS.init({duration:1000});
    },[]);

    return(
        <>
        <div className = "container">
  
        <h1 class="startbar">Designer, Front-end Developer & Mentor </h1>
        <h3 class="quote">I design and code beautifully simple things, and I love what I do.</h3>
        <div class="alignimgcenter"><img src={pics} class="profilepic"></img></div>
        <div class="alignworkcenter" data-aos="zoom-in-down"><img src={pictures} class="workstation"></img></div>
        <div class="background">

            <h1 class="presentation" data-aos='fade-up'>Hi, I’m Lenart. Nice to meet you.</h1>
            <div class="texth2" data-aos='fade-up'>
            <h3>Since beginning my journey as a freelance designer nearly 5 years ago, I've done remote work for companies and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h3>
            </div>
            
            
        </div>

       <section class="section skills has-text-centered">
        <div class="container is-narrow">
            <div class="box">
                <div class="content">
                    <div class="columns is-centered">
                        <div class="column">
                        <FontAwesomeIcon color="#c3073f" class="DesignerIco" icon={ faPencilRuler }/>
                            <h1 class="title is-size-4 is-spaced">Designer</h1>
                            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <p class="Workstodo">Things I enjoy designing:</p>
                            <p>UX, UI, Web, Mobile, Apps, Logos</p>
                            <p class="Worktodoagain">Design Tools:</p>
                            <p class="paragraf">Balsamiq Mockups</p>
                            <p class="paragraf">   Figma</p>
                            <p class="paragraf">   Invision </p>
                            <p class="paragraf">   Marvel </p>
                            <p class="paragraf">   Pen & Paper </p>
                            <p class="paragraf">   Sketch </p>
                            <p class="paragraf">  Webflow </p>
                            <p class="paragraf">   Zeplin </p>
                        </div>
                        <div class="column">
                        <FontAwesomeIcon color="#c3073f" class="DesignerIco" icon={ faPencilRuler }/>
                        <h1 class="title is-size-4 is-spaced">Front-end Developer</h1>
                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <p class="Workstodo">Languages I speak:</p>
                            <p>HTML, CSS, PHP, ReactJs, Java</p>
                            <p class="Worktodoagain">Dev Tools:</p>
                            <p class="paragraf">Atom</p>
                            <p class="paragraf">   Bitbucket</p>
                            <p class="paragraf">   Bootstrap </p>
                            <p class="paragraf">   Bulma </p>
                            <p class="paragraf">   Codekit </p>
                            <p class="paragraf">   Codepen </p>
                            <p class="paragraf">  Github </p>
                            <p class="paragraf">   Gitlab </p>
                            <p class="paragraf">   Terminal </p>

                        </div>
                        <div class="column column4">
                        <FontAwesomeIcon color="#c3073f" class="DesignerIco" icon={ faPencilRuler }/>
                        <h1 class="title is-size-4 is-spaced">Mentor</h1>
                        <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                        <p class="Workstodo">Experiences I draw from:</p>
                            <p>UX/UI, Product design, Freelancing</p>
                            <p class="Worktodoagain">Mentor Stats:</p>
                            <p class="paragraf">5 Years on DigitalSchool</p>
                            <p class="paragraf">2th Place CodeFest</p>
                            <p class="paragraf">The Best Project Award</p>
                            <p class="paragraf">5 Months as SocialMediaMangager</p>
                            <p class="paragraf">5 Months as website maintenancer</p>
                            <p class="paragraf">5 Months as Product Designer</p>
                            <p class="paragraf">Currently Working on IBEX</p>
                            <p class="paragraf"></p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

       </section>
            <div class="gladto">
                
                <h1 class="whoiwork">I'm proud to have collaborated with some awesome companies:</h1>
                
            </div>
            <div class="client-grid">
                    <img src={starlabs} class="starlabslogo"></img>
                    <img src={ibex} class="ibexlogo"></img>
                     <img src={gmw} class="gmwlogo"></img> 



                </div>

            
        </div>
        </>
    )
}

export default Home;