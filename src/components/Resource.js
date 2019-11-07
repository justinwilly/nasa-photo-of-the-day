import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureOTD from "./PictureOTD";

export default function Resource() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nKU1ijTbpGXRXzssZ1jZch0cwu2SkMW1lRgFl440`
      )
      .then(response => {
        console.log(response);
        setApod(response.data)
      })
      .catch(error => {
        console.log("Oh brother what did you break now..", error);
      });
  }, []);

  return (
    <div className="container">
      <PictureOTD title={apod.title} imgUrl={apod.hdurl} description={apod.explanation}
      date={apod.date} />
    </div>
  );
}