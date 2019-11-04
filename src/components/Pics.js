import React,{useState, useEffect} from "react"
import {Link} from "react-router-dom";
import axios from "axios";

function Pic (props) {
    const [pictures, setPictures] = useState ([])
    const id = props.match.params.id 

    useEffect (() => {
axios.get(`/Pics/${id}?_embed=pictures`).then(resp => {
    setPictures(resp.data.pictures)
})
}, [])

return (
    <div className="background">
    <div className="gcontainer">
    {pictures.map((e)=>(
    <Link to= {"/Albums/" + e.id} key={"key" + e.id}>
    <div class="gallery-image2">
             <div class="img-box2">
             <img className="albumsize" src = {e.url}/>
             </div>
             </div>    </Link>
    
        ))}
    </div>
    </div>
)

}
export default Pic




