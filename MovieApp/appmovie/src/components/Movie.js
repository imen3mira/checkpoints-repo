import React from 'react'
import Star from './Star'
function movie({nom , de , sortie,url,note}) {
    return (
        <div className="movie">
            <Star note={note}/>
            <img src={url} alt="imageFilm" width="250px" height="300px"/>
            <p>Titre:{nom}</p>
            <p>De : {de}</p>
            <p>Date de lancement :{sortie}</p>
        </div>
    )
}

export default movie
