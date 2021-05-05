import { useState, useEffect} from "react";

export default function Stories() {
  let [stories, setStories] = useState([])

  useEffect(() => {
    fetch("/api/stories")
      .then(res => res.json())
      .then(json => {
        setStories(json.stories)
      })
  }, [])

  return (
      <div id="main_panel">          
      <div className='inner-pannel'>
      
        <div >
         
                {stories.map(story => (
                    <div>
                        <tr>
                        <td className="picture"> <img className='tinyLogo' src={`${story.pic}`} /></td> 
                        
                        <td>{story.name}</td>
                        <td>{story.program}</td>
                        <td>{story.testimony}</td>
                        </tr>        
                    </div>
                ))}
           
        </div>
    </div>
    </div>
  )
}
