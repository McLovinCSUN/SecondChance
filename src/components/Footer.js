import React,{useRef, useState} from 'react';
import './Footer.css';

export default function Footer() {
    const [copySuccess, setCopySuccess] = useState('');


  function copyToClipboard() {
    navigator.clipboard.writeText('projectrebound@csun.edu');
    setCopySuccess('Copied!');
  };


    return (
        <div className='footerContainer'>
            <div className='address'>Project Rebound<br/>CHS JR Hall 148<br/>18111 Nordhoff Street<br/>Northridge, CA<br/> 91330-8246</div>     
            <div className='email'>
       
 <button 
  onClick={copyToClipboard}
>
 projectrebound@csun.edu
</button>
{copySuccess}
      </div>
      </div> 
        
    )
}

