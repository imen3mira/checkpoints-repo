import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import ListMovies from './components/ListMovies';
import Star from './components/Star'
import StarSearch from './components/StarSearch'
function App() {

  /*-----------------------Les données------------------------*/
  const [movies, setMovies] = useState([{ index: 1, nom: "Ferdinand le taureau", de: "Munro Leaf et Robert Lawson", sortie: "25 novembre 1938", url: "https://www.ecranlarge.com/uploads/image/001/008/yzwhtpyygdybkiahfehwfhhpee3-170.jpg ", note:"2" },
  { index: 2, nom: "Zootopie", de: " Jared Bush, Byron Howard, Rich Moore", sortie: "17 février 2016", url: "https://www.filmspourenfants.net/wp-content/uploads/2018/02/zootopie-a-375x500.jpg" ,note:"3"},
  { index: 3, nom: "Aladdin", de: " John Musker, Ron Clements", sortie: "10 novembre 1993", url: "https://fr.web.img5.acsta.net/pictures/16/06/06/09/31/004115.jpg" , note:"4"},
  { index: 4, nom: "Les Aristochats", de: " Wolfgang Reitherman", sortie: "8 décembre 1971", url: "https://images.genius.com/fd771fc5820e13d6a95df10c52e23220.1000x1000x1.jpg" , note:"5"}]);

  /* -----------------------Ajout----------------------------*/
  const add = (nom, de, sortie, url) => {
    const newMovie = {
      id: movies.length + 1,
      nom: nom,
      de: de,
      sortie: sortie,
      url: url
    };
    setMovies([...movies, newMovie]);

  };
  /* -------------------recherche------------------------  */
  const [searchMovie, setSearchMovie] = useState("")
  const [searchMovieStar, setSearchMovieStar] = useState("")
  const [Hover, setHover]= useState(null)
  const newlistmovie = movies.filter(Movie => (Movie.nom.toLowerCase().includes(searchMovie.toLowerCase()) &&  (Movie.note>= Hover)))

  /*-----------------------------------------------------*/

 

  return (
    <div className="App">
      <header>
        <h1> Movie App  </h1>
        <div>
        <StarSearch setHover={setHover} Hover={Hover}/>
        <Search setSearchMovie={setSearchMovie} Hover={Hover} setHover={setHover} />
        </div>
      </header>
      <main>
       
        <ListMovies movies={movies} add={add} newlistmovie={newlistmovie} />
        
        
      </main>
    </div>
  );
}

export default App;
