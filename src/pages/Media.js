import { useState, useEffect} from "react";
import {Row, Col,Card} from 'react-bootstrap';

export default function Media() {
  let [medias, setMedia] = useState([])

  useEffect(() => {
    fetch("/api/media")
      .then(res => res.json())
      .then(json => {
        setMedia(json.media)
      })
  }, [])

  return (
      <div id="main_panel">          
      <div className='inner-pannel'>
         {medias.map(media => (
           <Row>
            <Col>
              <Card  border="primary"  style={{ width: '70rem',  display: 'block', margin: 'auto', marginTop: '10px', marginBottom:'10px', boxShadow: '2px 2px 4px #000000'}} >
                <Row className="no-gutters">
                  <Col md="4">
                    <Card.Img
                      top
                      width="100%"
                      src={`${media.pic}`}
                      alt="Articles Image"
                    />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <Card.Title>{media.title}</Card.Title>
                      <Card.Subtitle>{media.date}</Card.Subtitle>
                       <Card.Link href={media.link}>Read More</Card.Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}  
    </div>
    </div>
  )
}
