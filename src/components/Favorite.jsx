import React from 'react'
import { Link } from 'react-router-dom';

const Favorite = () => {
  const handleFavoriteClick = () => {
    console.log ('Bouton favori cliqué')
  }
  return (
    <div>
      <button onClick={handleFavoriteClick}>Ajouter aux favoris</button>
    </div>
  
  )
}

export default Favorite;