import React from 'react'
import './Mainmap.css';
import Nav from './Nav';

function Mainmap() {
    return (
        <section className='display-container'>
            <Nav imgurl={"blacklogo"}/>
            <div className="Mainmap good">
                <div className="maplogo"><img className='img-fluid' src="img/mapLogo.png" alt="map로고" /></div>

                <div className="mapmain"><img className='img-fluid' src="img/map.png" alt="지도" /></div>
                <div className="mapmenu"><img className='img-fluid' src="img/mapMenu.png" alt="지도설명" /></div>

                {/* <div>
                    <div>
                        <Link to=""></Link>
                        <div></div>
                    </div>

                    <div>
                        <Link to=""></Link>
                        <div></div>
                    </div>

                    <div>
                        <Link to=""></Link>
                        <div></div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Mainmap