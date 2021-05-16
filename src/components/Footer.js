import React,{useState} from 'react';
import './Footer.css';
import { FaMapMarkerAlt,  FaEnvelope} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
  //this state is set once the email has been copied onto the clip board and will display copied once it was successful to user
    const [copySuccess, setCopySuccess] = useState('');

  //when the button is clicked by the user this function is triggered and we are able to copie the email address into the user clipboard in case they do not have 
  //desk app that initiates 'mailto:' they can paste the email address when they open email service on webbroswer 
  function copyToClipboard() {
    navigator.clipboard.writeText('projectrebound@csun.edu');
    setCopySuccess('Copied!');
  };

    return (
      <div className='footerContainer'>
        <div className='address'>
          <IconContext.Provider value={{ color: "#fe7ec9", className: "map" }}>
            <FaMapMarkerAlt/> 
          </IconContext.Provider>
          <br/>
          <p>Project Rebound<br/>CHS JR Hall 148<br/>18111 Nordhoff Street<br/>Northridge, CA<br/> 91330-8246</p> 
        </div>     
        <div className='email'>
          <IconContext.Provider value={{ color: "#38c4c1", className: "envelope" }}>
            <FaEnvelope/>
          </IconContext.Provider>
          <br/>
          <button onClick={copyToClipboard}>
            projectrebound@csun.edu
          </button>
          {copySuccess}
        </div>
      </div> 
    )
}

