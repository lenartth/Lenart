import React, {useEffect} from 'react';
import './contact.css';
import ReactPlayer from "react-player";
import { faBalanceScale, faBlog, faBox, faBoxOpen, faDumpsterFire, faFingerprint, faPencilRuler, faTools } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import "aos/dist/aos.css"
import pics from "../../images/profilepic.svg"
import { text } from '@fortawesome/fontawesome-svg-core';





const Contact = () => {

    useEffect(() => {
        AOS.init({duration:1000});
    },[]);

    return(    
        <>
        <div class="alignnqender">
                    <img src={pics} class="profilepiclogo"></img>
        </div>

        <div class="abouth1center">

                <h1 class="abouttitle">Thanks for taking the time to reach out. How can I help you today?</h1>


        </div>


        <div class="contactform">

            <div class="aboutcolumn">

                

                    <div class="field">
                        <label class="label" type="name">Name</label>
                        <input type="text" name="text" class="input spaceright" required />
                    
                    </div>

                    <div class="field">
                    <label class="label" type="email">Email</label>
                        <input type="text" name="text" class="input" required />
                    
                    </div>

                   

                    
            </div>
            <div class="aboutcolumn2">
            <div class="field">
                    <label class="label">Message</label>
                        <textarea type="text" name="text" class="textarea2" required ></textarea>
                    </div>
            </div>

            <div class="submitbuttonaa">

                <button type="submit" class="butonisubmit">Submit</button>  
            </div>

        </div>


        







</>
        )
}














export default Contact;