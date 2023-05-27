import React, { useEffect, useState, forwardRef} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = forwardRef(({ imgurl, classcolor, btncolor, handleX }, ref) => {
  
  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0); // 상단으로 스크롤
  }, [scroll]);

  const handleButtonClick = () => {
    setScroll(prevCount => prevCount + 1);
  };

  return (
    <div className={`navbar fixed-top d-flex justify-content-center`}>
      {/* <Link to="/" className='home'><AiOutlineHome size="50" color='#6bc6dd'/></Link> */}
      <div className='logo'>
        {/* <Link to="/" scrollintoview>
            <img src="img/PoolUsHeart.png" alt="Pool:Us Heart"/>
        </Link> */}
        <Link to="/" onClick={() =>{handleButtonClick()}}>
          <img src={`img/logo/${imgurl}.png`} alt="Pool:Us Heart"/>
        </Link>
      </div>
      <div>
        {/* hamburger */}
        <input type="checkbox" id="navi-toggle" className="checkbox" />
          <label htmlFor="navi-toggle" 
            className={`button ${classcolor}`} onClick={handleX} ref={ref}
            style={{ backgroundColor: btncolor}}
            >
            <span className="icon">&nbsp;</span>
          </label>
          <div className="background">&nbsp;</div>
          {/* nav */}
          <nav className="nav nav-style">
            <ul className={`list ${classcolor}`}>
              <li className="item" >
                <Link to="/infomain" className="link sbaggro-font" >공지사항</Link>
              </li>
              <li className="item">
                <Link to="/TimeTable" className="link sbaggro-font">타임테이블</Link>
              </li>
              <li className="item">
                <Link to="/ArtistTitle" className="link sbaggro-font">아티스트 라인업</Link>
              </li>
              <li className="item">
                <Link to="/Mainmap" className="link sbaggro-font">POOL:US MAP</Link>
                </li>
              <li className="item">
                <Link to="/about" className="link sbaggro-font">만든이들</Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  )
})

export default Nav
