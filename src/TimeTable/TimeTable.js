import { useState } from 'react';
import Time from './TimeTable.json';
import './TimeTable.css';
import { MdPlace } from "react-icons/md"
import '../container.css';
import '../App.css';
import { Link } from 'react-router-dom';

const TimeTable = () => {
    const [day, setDay] = useState(30); // 화, 수 구분 state

    const changeDay = ( newDay ) => {
        setDay(newDay);
    }
    
    const day30 = day === 30 ? 'active-day' : 'non-act';
    const day31 = day === 31 ? 'active-day' : 'non-act';

    return (
        <section className="display-container fullbgB">
            <div className="TimeTable good">
                <div className="HeartImg">
                    <Link to="/">
                        <img src="img/PoolUsHeart.png" alt="Pool:Us Heart" />
                    </Link>
                </div>
                
                <div className="dayBtns">
                    <button className={`dayBtn ${day30}`} onClick={() => changeDay(30)}>30일<br/>화요일</button>
                    <button className={`dayBtn ${day31}`} onClick={() => changeDay(31)}>31일<br/>수요일</button>
                </div>

                <hr className="tthr"></hr>

                <div className="boothNstage">
                    <div className="booth">
                        <div className="boothTitle bothbooth">부스</div>
                        {Time.filter(item => item.type === "booth").map((item) =>
                            <div className="boothBox">
                                <div>{item.time !== "" ? (
                                <div>
                                    <span>{item.time}</span>
                                    <img className="blueCircle" src="img/blueCircle.png" alt="" />
                                </div>) : null}</div>
                                <div>{item.title}</div>
                                <div>{item.place} <MdPlace /></div>
                            </div>)} 
                    </div>
                    
                    <img src="img/Line2.png" alt="Line" />

                    <div className="stage">
                        <div className="stageTitle bothbooth">공연</div>
                        <div className="stagemt">
                            {Time.filter(item => item.day !== day && item.type === "stage").map((item) => 
                            <div className="stageBox">
                            <div>{item.time !== "" ? (
                                <div>
                                    <span>{item.time}</span>
                                    <img className="greenCircle" src="img/greenCircle.png" alt="" />
                                </div>) : null}</div>
                                <div className="breakword">{item.title}</div>
                                <div><MdPlace /> {item.place}</div>
                            </div> )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeTable;
