import React, {useEffect} from 'react';
import './header.css';
import headerLinks from './headerLinks';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <>
        <header>
        <h2 className="webname"><FontAwesomeIcon color="#c3073f" icon={ faBlog }/> LENART THAÇI</h2>
        
            <div className="middle">
            {headerLinks.map((l) => (
              <LinkCategory key={l.name} {...l} />
            ))}
          </div>
        </header>
        </>
    )
}

const LinkCategory = (props) => {
    return (
        <div className="links">
          {props.links.map((l) => {
            return (
              <Link key={l.to} to={l.to} className="header-links">
                {l.name}
              </Link>
            );
          })}
        </div>
    );
  };


export default Header;
