import React, { useEffect } from 'react'
import './Mainmap.css';
import mapBackground from './mapbackground.png';

function Mainmap() {
    useEffect(() => {
            document.body.style.backgroundImage = `url(${mapBackground})`; // body의 배경 이미지 변경
    }, []);

    return (
        <section className="flexcontainer">
            <div className="Mainmap">
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