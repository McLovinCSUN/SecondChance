import {useState, useEffect} from "react";
import {Row, Col,Card} from 'react-bootstrap';

export default function Stories() {
  //once we make the call to our mock server the object will be set to stories as an array 
  let [stories, setStories] = useState([])

  //make the call to the mock server with the end point /api/stories
  useEffect(() => {
    fetch("/api/stories")
      .then(res => res.json())
      .then(json => {
        setStories(json.stories)
      })
  }, [])

  //here we use bootstrap's cards to display the individual information and testitmony
  //inline styling works better with bootstarp 
  return (
    <div id="main_panel">          
      <div className='inner-pannel' style={{paddingTop:'3vh' }}>
        {stories.map(story => (
          <Row>
            <Col>
              <Card  border="primary"  style={{ width: '50rem',  display: 'block', margin: 'auto', marginTop: '10px', marginBottom:'10px', boxShadow: '2px 2px 4px #000000'}} >
                <Row className="no-gutters">
                  <Col md="4">
                    <Card.Img
                      top
                      width="100%"
                      src={`${story.pic}`}
                      alt="Student's Picture"
                    />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <Card.Title>{story.name}</Card.Title>
                      <Card.Subtitle>{story.program}</Card.Subtitle>
                      <Card.Text>
                        <br/>
                        <i>"{story.testimony}"</i>
                      </Card.Text>
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
