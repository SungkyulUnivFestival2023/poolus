import React from 'react'
import { TbClick } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './Artist.css';

function Lineuptitle() {
  return (
    <section className="fullbgB">
        <div className="Lineuptitle good">       
            <Link to="/ArtistLineup" className="clickparent">
                <TbClick className="click" size="30" color="white" />
                <img src="img/artist/artistTitle.png" alt="라인업메인로고" />
            </Link>
        </div>
    </section>
  )
}

export default Lineuptitle