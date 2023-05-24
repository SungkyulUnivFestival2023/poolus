import { Link } from 'react-router-dom';
import '../container.css';
import './WaterIsland.css';
import { useEffect } from 'react';

const WaterIsland = () => {
    useEffect(() => {
        const newColor = 'black'; // 변경할 배경색을 지정
        document.body.style.backgroundColor = newColor; // body의 배경색 변경
    }, []);

    return (
        <section className="flexcontainer">
            
            <div className="WaterIsland">
                <div className="waterIslandLogo">
                    <img src="img/WaterIslandLogo.png" alt="waterIslandLogo" />
                </div>

                <div className="waterIslandBtn">
                    <Link to="/WaterIsland/Attraction">
                        <button>어트랙션</button>
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
        </section>
    );
}

export default WaterIsland;