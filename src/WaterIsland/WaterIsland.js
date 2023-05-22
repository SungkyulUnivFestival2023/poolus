import { Link } from 'react-router-dom';
import '../container.css';
import './WaterIsland.css';


const WaterIsland = () => {
    return (
        <div className="flexcontainer vhHeight flexend">
            <div className="WaterIsland">
                <div className="waterIslandLogo">
                    <img src="img/WaterIslandLogo.png" alt="waterIslandLogo" />
                </div>

                <div className="waterIslandBtn">
                    <Link to="/WaterIsland/Attraction">
                        <button >어트랙션</button>
                    </Link>
                    <Link to="/WaterIsland/Goods">
                        <button>매표소 (굿즈)</button>
                    </Link>
                </div>

                <div className="backgroundImg"> 
                    <img className="tree" src="img/tree.png" alt="야쟈수" />
                    <img className="wave" src="img/wave1.png" alt="파도" />
                </div>
            </div>
        </div>
    );
}

export default WaterIsland;