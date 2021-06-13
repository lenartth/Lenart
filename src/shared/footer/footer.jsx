import React, {useEffect} from 'react';
import '../footer/footer.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faEnvelope, faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import "aos/dist/aos.css"
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
  

const Footer = () => {

    return(
<>
    <footer>

    <section class="section1 call-to-action is-primary has-text-centered">
      <div class="container1 is-narrow">
        <div class="boxes" data-aos="fade-in">
          <div class="columns level">
            <div class="kolona level-item">
              <h1 class="titlee">Start a project</h1>
            </div>
            <div class="kolona level-item">
              <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div class="kolona level-item"><a class="button is-primary is-outlined is-rounded is-medium" href="/contact">Let's do this</a></div>
          </div>
        </div>
      </div>

      <FontAwesomeIcon class="iconsmalls" color="white" icon={ faBlog }/>
      <h1 class="title is-size-4-touch textmovess">Living, learning, &amp; leveling up one day at a time.</h1>
        

        <p class="alignnmes">

            <div class="iconfooter">

                <a href="instagram.com/lenartth"><FontAwesomeIcon class="instaicon" color="white" icon={ faInstagram }/></a>

            </div>

            

            <div class="iconfooter">

                <a href="instagram.com/lenartth"><FontAwesomeIcon class="instaicon" color="white" icon={ faTwitter }/></a>

            </div>

           

            <div class="iconfooter">

                <a href="instagram.com/lenartth"><FontAwesomeIcon class="instaicon" color="white" icon={ faFacebook }/></a>

            </div>

            <div class="iconfooter">

                <a href="instagram.com/lenartth"><FontAwesomeIcon class="instaicon" color="white" icon={ faEnvelope }/></a>

            </div>

            <div class="iconfooter">

                <button class="redirectmedia" onClick={() => window.open("https://instagram.com/lenartth")}><FontAwesomeIcon class="instaicon" color="white" icon={ faLinkedinIn }/></button>

            </div>

            </p>
            <p class="alignnmes1">HandCrafted by me &copy; lenartth</p>
        

    </section>




        
    </footer>
</>
    )
}


export default Footer;