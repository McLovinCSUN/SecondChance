import React,{useRef, useState} from 'react';
import './Footer.css';

export default function Footer() {
    const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };


    return (
        <div className='footerContainer'>
            <div className='address'>Project Rebound<br/>CHS JR Hall 148<br/>18111 Nordhoff Street<br/>Northridge, CA<br/> 91330-8246</div>     
            <div className='email'>
       
   {
       document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>projectrebound@csun.edu</button> 
          {copySuccess}
        </div>
      }
      <form className='emailForm'>
        <textarea
          ref={textAreaRef}
          value='projectrebound@csun.edu'
        />
      </form>
      </div>
      </div> 
        
    )
}

