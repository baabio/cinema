import React from 'react'
import { Link } from 'react-router-dom'
import Poster from './Poster'
import Description from './Description'

const PostDescrip = (src, data) => {
  return (
    <>
    <Poster src={movie.poster}/>
    <Description data={movie}/>
    <div>
       <Link to="/accueil">HomePage</Link>
       <Link to="/navbar">Navbar</Link>
       </div>
       </>
  )
}

export default PostDescrip;