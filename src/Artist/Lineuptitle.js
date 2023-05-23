import React, { useEffect } from 'react'
import { TbClick } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './Artist.css';

function Lineuptitle() {
    useEffect(() => {
        const newColor = 'black'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

  return (
    <section className="flexcontainer">
        <div className="Lineuptitle">       
            <Link to="/ArtistLineup" className="clickparent">
                <TbClick className="click" size="30" color="white" />
                <img src="img/artist/artistTitle.png" alt="라인업메인로고" />
            </Link>
        </div>
    </section>
  )
}

export default Lineuptitle