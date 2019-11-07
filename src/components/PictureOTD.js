import React from "react"

const PictureOTD = props => {
    return (
        <div className="photo-card" >
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <img className="apodImg" alt="from NASA's Astronomy Picture of the Day " src={props.imgUrl} />
            <h2>Description: </h2> 
            <p>{props.description}</p>
        </div>
    )
}
export default PictureOTD