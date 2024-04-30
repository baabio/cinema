import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../assets/Images/avatar.webp'
import img2 from '../assets/Images/avengers.webp'
import img3 from '../assets/Images/BlackPanther.webp'
import img4 from '../assets/Images/denzel.webp'
import img5 from '../assets/Images/galsen.webp'
import img6 from '../assets/Images/Game-of-Thrones.webp'
import img7 from '../assets/Images/Infinite.webp'
import img8 from '../assets/Images/mk.webp'
import img9 from '../assets/Images/omar.webp'
import img10 from '../assets/Images/samourai.webp'
import img11 from '../assets/Images/saw.webp'
import img12 from '../assets/Images/TWD.webp'

const DetailFilm = () => {



  return (
    <>
      <h1>Films à l'affiche</h1>
      <hr />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="cols-3">
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img1} >Avatar</a></h5>
              <p className="card-text">Date de sortie: 25-04-2023</p>
            </div>
          </div>
        </div>
        <div className="cols-3">
          <div className="card">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img2}>Avengers</a></h5>
              <p className="card-text">Date de sortie: 12-11-2023</p>
            </div>
          </div>
        </div>
        <div className="cols-3">
          <div className="card">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img3}>Black panther</a></h5>
              <p className="card-text">Date de sortie: 11-06-2023</p>
            </div>
          </div>
        </div>
        <div className="cols-3">
          <div className="card">
            <img src={img4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img4}>Dune</a></h5>
              <p className="card-text">Date de sortie: 25-12-2023</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img5}>SOS Fantomes</a></h5>
              <p className="card-text">Date de sortie: 20-02-2024</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img6}>Game of throne</a></h5>
              <p className="card-text">Date de sortie: 13-07-2020</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img7} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img7}>Infinite</a></h5>
              <p className="card-text">Date de sortie: 22-01-2024</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img8} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img8}>Godzilla et kong</a></h5>
              <p className="card-text">Date de sortie: 12-03-2024</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img9} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img9}>Lupin</a></h5>
              <p className="card-text">Date de sortie: 12-05-2022</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img10} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img10}>Civil war</a></h5>
              <p className="card-text">Date de sortie: 18-06-2023</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img11} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img11}>Saw</a></h5>
              <p className="card-text">Date de sortie: 19-11-2007</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={img12} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"><a href={img12}>The walking dead</a></h5>
              <p className="card-text">Date de sortie: 16-09-2017</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default DetailFilm;
