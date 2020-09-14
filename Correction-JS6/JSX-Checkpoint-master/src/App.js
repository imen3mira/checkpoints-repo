import React from "react";
import user from "./user.jpg";
import "./styles.css";

export default function App() {
  // react component must return only one thing
  // so we wrap our content in a single container
  return (
    // inline styling a  style = {  {myStyle : "value" , myStyle:"value"}     }
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      {/* className not class   */}
      {/* all attrubites must be written in camelCase */}
      {/* for example autoplay becomes autoPlay */}
      <h1 className="title red">Jhon Doe</h1>
      <p>
        Greetings ,
        {/* self Closing Tags must end with "/" <br /> , <img /> ... */}
        <br />
        this is my first JSX checkpoint{" "}
      </p>
      <div className="img-container">
        {/* import a image in a variable from src/myImage.jpg  */}
        <img src={user} alt="imagesrc" />
        {/* from public just put the name of the file  in the src  */}
        <img src="mern.jpeg" alt="imagepublic" />
      </div>
      <div style={{ width: "300px", margin: "auto" }}>
        <iframe
          width="300"
          height="250"
          src="https://www.youtube.com/embed/DLX62G4lc44"
          // a camelCase attribute frameBorder
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
