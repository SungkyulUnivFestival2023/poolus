import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Artist.css';

function Lineuptitle() {
  return (
    <>
    <Helmet>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </Helmet>
    <section className="display-container">
        <div className="Lineuptitle good">       
            <Link to="/ArtistLineup" className="clickparent">
            <div className='click'>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_vykqp3ao.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
              ></lottie-player>
            </div>
                <img src="img/artist/artistTitle.png" alt="라인업메인로고" />
            </Link>
        </div>
    </section>
    </>
  )
}

export default Lineuptitle