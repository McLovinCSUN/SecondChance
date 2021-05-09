import { useState, useEffect} from "react";

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
        <div >
         {medias.map(media => (
            <tbody>
                <tr>
                    <td>{media.date}</td>
                    <td>{media.title}</td>
                </tr>        
            </tbody>
            ))}  
        </div>
    </div>
    </div>
  )
}
