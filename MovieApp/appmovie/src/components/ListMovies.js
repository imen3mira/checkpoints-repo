import React from 'react'
import Movie from './Movie'
import AddMovie from'./AddMovie'
function listMovies({movies, add,newlistmovie}) {
    return (
        <div className="movies">
            {newlistmovie.map(el=>(<Movie key={el.index} nom={el.nom} de={el.de} sortie={el.sortie} url={el.url} add={add}  note={el.note}/>))}
            <AddMovie add={add} />
        </div>
    )
}

export default listMovies
