import React from 'react'
import { Link } from 'react-router-dom';
import './Artist.css';
import { Helmet } from 'react-helmet';

function Lineuptitle() {
  return (
    <> 
      <section className="display-container">
          <div className="Lineuptitle good">       
              <Link to="/ArtistLineup" className="clickparent">
              <div className='click'>
                {/* <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_vykqp3ao.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '300px', height: '300px' }}
                  loop
                  autoplay
                ></lottie-player> */}
                
              </div>
                  <img src="img/artist/artistTitle.png" alt="라인업메인로고" />
              </Link>
          </div>
      </section>
      {/* <Helmet>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Helmet> */}
    </>
  )
}

export default Lineuptitle