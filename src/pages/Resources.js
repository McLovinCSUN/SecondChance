import { useState, useEffect} from "react";
import Survey from '../components/Questions';
import {Row, Col,Card, Button} from 'react-bootstrap';
import { FaGlobe,  FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import './Resources.css';
import { getByDisplayValue } from "@testing-library/dom";

export default function Resources() {
  //once we make the call to our mock server the object will be set to stories as an array 
  const [resources, setResources] = useState([]);
  //this state is set once the email has been copied onto the clip board and will display copied once it was successful to user
  const [copySuccess, setCopySuccess] = useState('');


  function copyToClipboard(email) {
    navigator.clipboard.writeText(email);
    setCopySuccess('Copied!');
  };

  //make the call to the mock server with the end point /api/resources
  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(json => {
        setResources(json.resources)
      })
  }, [])

  
  //here we use bootstrap's cards to display the individual information and testitmony
  //inline styling works better with bootstarp 
  return (

    <div id="main_panel-resource" className='homeContainer section col-lg-12 col-md-12 col-sm-12'>
    <div className='row'>
        <ul>
            {resources.map(resource => (
            <li>
                <div className='card mb-3'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <a href={resource.website}><img alt='Resosurce Logo' src={resource.logo} width='200' height='80' /></a>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                              
                                {/* <h5 className='card-title'>{resource.name}</h5> */}
                                <p className='card-text'><small className='text-muted'>{resource.location}</small></p>
                                <p className='card-text'><small className='text-muted'>{resource.address}</small></p>

                
                                <Card.Body>
                                  <Card.Link href={resource.linkedIn} target="_blank" style={{ display: resource.linkedIn !=='' ? 'block': 'none'}}>{resource.linkedIn === '' ? null:   <FaLinkedin/>}</Card.Link>
                                  <Card.Link href={resource.facebook} target="_blank" style={{ display: resource.facebook !=='' ? 'block': 'none'}}>{resource.facebook === '' ? null: <FaFacebook/>}</Card.Link>
                                  <Card.Link href={resource.instagram} target="_blank" style={{ display: resource.instagram  !=='' ? 'block': 'none'}}>{resource.instagram === '' ? null: <FaInstagram/>}</Card.Link>
                                  <Card.Link href={resource.twitter} target="_blank" style={{ display: resource.twitter !=='' ? 'block': 'none'}}>{resource.twitter === '' ? null: <FaTwitter/>}</Card.Link>
                                  <Card.Link href={resource.website} target="_blank">{resource.website === '' ? null: <FaGlobe/>}</Card.Link>
                                  <Button variant="link" onClick={()=>copyToClipboard(resource.email)}>{resource.email === '' ? null: <FaEnvelope/>}</Button>
                                  {copySuccess}
                                </Card.Body>
                  
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ))} 
        </ul>
    </div>

      <Survey/>   
    </div>
  )
}
