import React,{useState, useEffect} from "react"
import {Link} from "react-router-dom";
import axios from "axios";

function Pic (props) {
    const [pictures, setPictures] = useState ([])
    const id = props.match.params.id 

    useEffect (() => {
axios.get(`/Albums/${id}`).then(resp => {
    setPictures(resp.data)
})
}, [id])

return (
    <div className="background">
    <div className="gcontainer">
    <Link to= {"/Albums/" + pictures.id} key={"key" + pictures.id}>
    <div class="gallery-image2">
             <div class="img-box2">
             <img className="albumsize" src = {pictures.url}/>
             </div>
             </div>    
    </Link>
    
        
    </div>
    </div>
)

}
export default Pic




