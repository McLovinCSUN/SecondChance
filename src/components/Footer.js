import React,{useState} from 'react';
import './Footer.css';
import { FaMapMarkerAlt,  FaEnvelope} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function FooterAddress() {
    const [copySuccess, setCopySuccess] = useState('');


  function copyToClipboard() {
    navigator.clipboard.writeText('projectrebound@csun.edu');
    setCopySuccess('Copied!');
  };

    return (
        <div id="footer" class="footer footerContainer">

            <div class="col-md-12">
                <div class="row">
                    <div id="address" class="col-md-6 col-lg-6 col-sm-12 address">

                        <div className='address-nav'>
                            <ul className='nav'>
                                <li>
                                    <IconContext.Provider value={{ color: "#fff", className: "map" }}>
                                        <FaMapMarkerAlt/> 
                                    </IconContext.Provider>
                                
                                    <div>Project Rebound - CHS JR Hall 148</div>
                                </li>
                                <li>
                                    <div>18111 Nordhoff Street, Northridge, Ca, 91330-8246</div>    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="email" class="col-md-6 col-lg-6 col-sm-12 email">
                        <div className='email-nav'>
                            <ul className='nav'>
                                <li>
                                    <IconContext.Provider value={{ color: "#ff", className: "envelope" }}>
                                        <FaEnvelope />
                                    </IconContext.Provider>
                                </li>
                                <li>
                                    <button onClick={copyToClipboard}>
                                        <div>projectrebound@csun.edu</div>
                                    </button>

                                    {copySuccess}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
     
    )
}

