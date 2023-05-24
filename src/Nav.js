import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';

function Nav() {
  return (
    <div className='d-flex justify-content-center navbar fixed-top'>
      <Link to="/" className='home'><AiOutlineHome size="50" color='#6bc6dd'/></Link>
      <div className='logo'>
        <Link to="/">
            <img src="img/PoolUsHeart.png" alt="Pool:Us Heart"/>
        </Link>
      </div>
      <div>
        {/* hamburger */}
        <input type="checkbox" id="navi-toggle" className="checkbox" />
          <label htmlFor="navi-toggle" className="button">
            <span className="icon">&nbsp;</span>
          </label>
          <div className="background">&nbsp;</div>
          {/* nav */}
          <nav className="nav nav-style">
            <ul className="list">
              <li className="item">
                <Link to="/TimeTable" className="link">타임테이블</Link>
              </li>
              <li className="item">
              <Link to="/ArtistTitle" className="link">아티스트 라인업</Link>
              </li>
              <li className="item">
              <Link to="/Home" className="link">공지사항</Link>
                </li>
              <li className="item">
              <Link to="/Mainmap" className="link">POOL:US MAP</Link>
                </li>
              <li className="item">
                <Link to="/" className="link">만든이들</Link>
              </li>
              <li className="item">
                <Link to="/GardenIsland" className="link">가든 아일랜드</Link>
              </li>
              <li className="item">
                <Link to="/WaterIsland" className="link">워터 아일랜드</Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  )
}

export default Nav