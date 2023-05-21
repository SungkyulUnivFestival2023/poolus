import { Link } from 'react-router-dom';
import '../container.css';
import './WaterIsland.css';
import { useRef, useState } from 'react';


const WaterIsland = () => {
    const attr = useRef("");
    const goods = useRef("");
    const [waterIsland, setWaterIsland] = useState("");

    const ChangeWaterIsland = (ref) => {
        const content = ref.current.innerHTML;
        setWaterIsland(content);
        console.log(waterIsland, content);
    }

    return (
        <div className="flexcontainer">
            <div className="WaterIsland">
                <div className="waterIslandLogo">
                    <img src="img/WaterIslandLogo.png" alt="waterIslandLogo" />
                </div>

                <div className="waterIslandBtn">
                    {/* 경로수정필요 */}
                    {waterIsland}
                    <Link to="/WaterIsland/Attraction">
                        <button onClick={()=>ChangeWaterIsland(attr)} ref={attr}>어트랙션</button>
                    </Link>
                    <Link to="/WaterIsland">
                        <button onClick={()=>ChangeWaterIsland(goods)} ref={goods}>매표소 ( 굿즈 )</button>
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