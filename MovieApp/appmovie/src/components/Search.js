import React,{useState} from 'react'
import Movie from './Movie'
import StarSearch from'./StarSearch'
function Search({setSearchMovie}) {
    

    

    return (
        <div>
        <input type="text" placeholder="search for a movie"  className="inputsearch" onChange={(e)=>{
  setSearchMovie(e.target.value)

   
}}/> 
        
        </div>
    )
}

export default Search
