import React,{useState, useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";

function Main(props) {
    const [albums, setAlbums] = useState ([])
    const id = props.match.params.id 

    useEffect (() => {
axios.get("/Albums").then(resp => {
    setAlbums(resp.data)
})
}, [])

    return (
            <div className="background">
            <div className="gcontainer">
            {albums.map((e)=>(
            <Link to= {"/Albums/" + e.id} key={"key" + e.id}>
            <p className="heading">{e.name}</p>
            <div class="gallery-image">
             <div class="img-box">
             <img className="albumsize" src = {e.url}/>
             </div>
             </div>
            </Link>
            
                ))}
            </div>
            </div>

           
    )
}

export default Main