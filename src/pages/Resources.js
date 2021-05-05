import { useState, useEffect} from "react";

export default function Resources() {
  let [resources, setResources] = useState([])

  useEffect(() => {
    fetch("/api/resources")
      .then(res => res.json())
      .then(json => {
        setResources(json.resources)
      })
  }, [])

  return (
      <div id="main_panel">          
      <div className='inner-pannel'>
    
        <div >
         
                {resources.map(resource => (
                    <div>
                        <tr>
                        <td>{resource.name}</td>
                        <td>{resource.location}</td>
                        <td>{resource.address}</td>
                        <td><a href={`mailto:${resource.email}`}>{resource.email}</a></td>
                        <td><a href={`${resource.linkedIn}`}>LinkedIn</a></td>
                        <td><a href={`${resource.facebook}`}>Facebook</a></td>
                        <td><a href={`${resource.instagram}`}>Instagram</a></td>
                        <td><a href={`${resource.twitter}`}>Twitter</a></td>
                        </tr>        
                    </div>
                ))}
           
        </div>
    </div>
    </div>
  )
}