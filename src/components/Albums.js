import React,{useState, useEffect} from "react"
import axios from "axios";
import { Link } from "react-router-dom";


function Content (props) {
    const [pictures, setPictures] = useState ([])
    const id = props.match.params.id 
    const [albums, setAlbums] = useState ([])


    useEffect (() => {
axios.get(`/Albums/${id}?_embed=pictures`).then(resp => {
    setPictures(resp.data.pictures)
})
}, [])


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
            <p className="heading1">{e.name}</p>
            <div className="linkbar">
             <img className="albumsizebar" src = {e.url}/>
             </div>
            </Link>
        ))}



            {pictures.map((e)=>(
            <Link to= {"/Pics/" + e.id} key={"key" + e.id}>
            <div class="gallery-image2">
             <div class="img-box2">
             <img className="albumsize" src = {e.url}/>
             </div>
             </div>
            </Link>
            
                ))}
            </div>
            </div>
    )
}

export default Content





