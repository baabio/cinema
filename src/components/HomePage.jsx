import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Favorite from './Favorite';

const HomePage = () => {
  const [movies, setMovies] = useState([
    { title: 'Avatar', poster: '/src/assets/Images/avatar.webp', realeased: 'Date de sortie: 12-12-2023', favorite:'true' },
    { title: 'Avenger', poster: '/src/assets/Images/avengers.webp', realeased: 'Date de sortie: 03-05-2022', favorite:'true' },
    { title: 'Black Panther', poster: '/src/assets/Images/BlackPanther.webp', realeased: 'Date de sortie: 24-06-2023', favorite:'true' },
    { title: 'Dune', poster: '/src/assets/Images/denzel.webp', realeased: 'Date de sortie: 17-11-2023', favorite:'true' },
    { title: 'S.O.S Fantômes: La menace de glace', poster: '/src/assets/Images/galsen.webp', realeased: 'Date de sortie: 11-02-2024', favorite:'true' },
    { title: 'Games of throne', poster: '/src/assets/Images/Game-of-Thrones.webp', realeased: 'Date de sortie: 19-08-2019', favorite:'true' },
    { title: 'Infinite', poster: '/src/assets/Images/Infinite.webp', realeased: 'Date de sortie: 17-01-2024', favorite:'true' },
    { title: 'Godzilla vs kong: Le nouvel empire', poster: '/src/assets/Images/mk.webp', realeased: 'Date de sortie: 12-12-2023', favorite:'true' },
    { title: 'Lupin', poster: '/src/assets/Images/omar.webp', realeased: 'Date de sortie: 09-11-2023', favorite:'true' },
    { title: 'Civil war', poster: '/src/assets/Images/samourai.webp', realeased: 'Date de sortie: 19-10-2017', favorite:'true' },
    { title: 'Saw: Le chapitre final', poster: '/src/assets/Images/saw.webp', realeased: 'Date de sortie: 17-04-2009', favorite:'true'},
    { title: 'The walking dead', poster: '/src/assets/Images/TWD.webp', realeased: 'Date de sortie: 21-09-2011', favorite:'true' },

  ]);

  return (
    <div>
      <h1>Liste des films à l'affiche cette semaine</h1> <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie, index) => ( 
          <div className="cols-3">
          <div className="card">
          <Link to={movie.poster} ><img src={movie.poster} className="card-img-top" alt="..."  /></Link>
          <div className="card-body">
            <h5 className="card-title"><a href={movie.poster} > {movie.title} </a></h5>
            <p className="card-text">{movie.realeased}</p>
            <button className='fav'> <img src="/src/assets/Images/coeur (2).png" alt=""/> </button>
          </div>
        </div>
      </div>
        ))}
        </div>
      </div>
      <Link to="/descriptif">PostDescrip</Link>
      <Link to="/navbar">Navbar</Link>
    </div>
  );
};

export default HomePage;