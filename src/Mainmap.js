import React from 'react'
import './Mainmap.css';

function Mainmap() {
    return (
        <section>
            <div className="Mainmap good">
                <div className="maplogo"><img src="img/mapLogo.png" alt="map로고" /></div>

                <div className="mapmain"><img src="img/map.png" alt="지도" /></div>
                <div className="mapmenu"><img src="img/mapMenu.png" alt="지도설명" /></div>

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