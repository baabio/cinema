import React from 'react'
// import { Link } from 'react-router-dom'
import poster from '../assets/Images/omar.webp'

const Description = ({ data, src }) => {

  return (
    <div className='row'>
      <div className='col-5'>
        <img src={poster} alt="" height={700} className="rounded-4" />
      </div>
      <div className='col-7'>
        <h1 className="green">{data.title}</h1>
        <b className="green">Release date:</b> {data.releaseDate}
        <b className="green"> Runtime:</b> {data.runtime} mn
        <b className="green"> Rating:</b> {data.rating}%
        <p>
          <b className="green">Genres:</b> {data.genres}
        </p>
        <p>
          <b className="green">Budget:</b> ${data.budget}
        </p>
        <p>
          <b className="green">Revenue:</b> ${data.revenue}
        </p>
        <p>
          <b className="green">Overview: </b>{data.overview}
        </p>
      </div>
      {/* <Link to="/homePage">HomePage</Link>
      <Link to="/favoriteMovies">FavoriteMovies</Link>
      <Link to="/poster">Poster</Link>
      <Link to="/navbar">Navbar</Link> */}
    </div>
  );
};

export default Description;
