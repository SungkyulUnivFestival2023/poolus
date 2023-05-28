import { useEffect, useRef, useState } from 'react';
import Time from './TimeTable.json';
import './TimeTable.css';
import { MdPlace } from "react-icons/md"
import '../container.css';
import '../App.css';
import Nav from '../Nav';


import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const TimeTable = () => {
    const changeDay = ( newDay ) => {
        setDay(newDay);
    }

    const Xclickdom = useRef(null);
    const [Xclick, setXclick] = useState(true);

    const handleX= () => {
        setXclick(!Xclick);
        console.log(Xclickdom.current, Xclick);
    }

    const zindex = Xclick ? '' : 'zindex';

    const [day, setDay] = useState(30); // 화, 수 구분 state

    
    const day30 = day === 30 ? 'activebtn' : '';
    const day31 = day === 31 ? 'activebtn' : '';

    useEffect(() => {
        window.scrollTo(0, 0); // 상단으로 스크롤
      }, [day]);

    // tooltip
    const [show, setShow] = useState(false);
    const targets = useRef({});

    const toggleTooltip = (id) => {
        setShow((prevShow) => ({ ...prevShow, [id]: !prevShow[id] }));
    };

    return (
        <section className="display-container fullbgB">
            <Nav handleX={handleX} ref={Xclickdom} imgurl={"heartlogo"} />
            <div className="diao fixed-top d-flex justify-content-center"><img src="img/black.png" alt="안돼" /></div>
            <div className="TimeTable good navmargin">
                <div className="dayBtns">
                    <div className={`${zindex} dayBtns navmargin navbar fixed-top d-flex justify-content-center`}>
                        <button className={`wslidebtn ${day30}`} onClick={() => changeDay(30)}>DAY1</button>
                        <button className={`wslidebtn ${day31}`} onClick={() => changeDay(31)}>DAY2</button> 
                    </div>
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
                                <button
                                        className="TTbtn TTbtn-no-shadow"
                                        ref={ref => targets.current[item.id] = ref}
                                        onClick={() => toggleTooltip(item.id)}
                                    >
                                    <div className={`breakword TTtitle ${item.color}`}>{item.title}</div>
                                    <div className="TTtime"><MdPlace /> {item.place}</div>
                                </button>
                                <Overlay
                                    target={targets.current[item.id]}
                                    show={show[item.id]}
                                    placement="bottom"
                                    key={item.id}
                                >
                                    {(props) => (
                                        <Tooltip id={`overlay-example-${item.id}`} {...props}>
                                            <span className="overlaysub">{item.sub}</span>
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </div> )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeTable;