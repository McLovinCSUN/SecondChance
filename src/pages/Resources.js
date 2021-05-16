import { useState, useEffect} from "react";
import Survey from '../components/Questions';
import {Row, Col,Card, Button} from 'react-bootstrap';
import { FaGlobe,  FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import './Resources.css';

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
      <div id="main_panel">    
      <div className='inner-pannel'>
        <div >
         {resources.map(resource => (
           <Row>
            <Col>
              <Card  border="primary"  style={{ width: '70rem',  display: 'block', margin: 'auto', marginTop: '10px', marginBottom:'10px', boxShadow: '2px 2px 4px #000000'}} >
                <Row className="no-gutters">
                  <Col md="4">
                    <Card.Img
                      top
                      width="100%"
                      src={`${resource.logo} `}
                      alt="Organization Logo"
                    />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <Card.Title>{resource.name }</Card.Title>
                      <Card.Subtitle>{resource.address === '' ? null: resource.address}<br/></Card.Subtitle>
                       <Card.Link href={resource.linkedIn}>{resource.linkedIn !== '' ? null: <FaLinkedin/>}</Card.Link>
                       <Card.Link href={resource.facebook}>{resource.facebook === '' ? null: <FaFacebook/>}</Card.Link>
                       <Card.Link href={resource.instagram}>{resource.instagram === '' ? null: <FaInstagram/>}</Card.Link>
                       <Card.Link href={resource.twitter}>{resource.twitter === '' ? null: <FaTwitter/>}</Card.Link>
                       <Card.Link href={resource.website}>{resource.website === '' ? null: <FaGlobe/>}</Card.Link>
                       <Button variant="link"onClick={()=>copyToClipboard(resource.email)}>{resource.email === '' ? null: <FaEnvelope/>}</Button>
                       {copySuccess}
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          ))}
        </div>
    </div>
      <Survey/>   
    </div>
  )
}