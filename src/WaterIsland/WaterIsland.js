import { Link } from 'react-router-dom';
import '../container.css';
import './WaterIsland.css';

const WaterIsland = () => {

    return (
        <section className="display-container fullbgB">
            <div className="WaterIsland good">
                <div className="griddd">
                    {/* <div className="waterIslandLogo">
                        <img src="img/logo/waterlogo.png" alt="waterIslandLogo" />
                    </div> */}
                    <div className='water-island-title'>
                        <p className='island-title text-center isamanroo-font'>WATER ISLAND</p>
                        <p className='poolus-title text-center anton-font'>POOL:US</p>
                    </div>

                    <div className="waterIslandBtn">
                        <Link to="/WaterIsland/Attraction">
                            <button>어트랙션</button>
                        </Link>
                        <Link to="/WaterIsland/Goods">
                            <button>매표소 (굿즈)</button>
                        </Link>
                    </div>
                </div>

                <div className="backgroundImg"> 
                    <img className="tree" src="img/tree.png" alt="야쟈수" />
                    <img className="wave" src="img/wave1.png" alt="파도" />
                </div>
            </div>
        </section>
    );
}

export default WaterIsland;
