import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './Nav';
import Home from './Home';
import TimeTable from './TimeTable/TimeTable';
import WaterIslandMenu from './WaterIsland/Carousel/WaterIslandMenu';
import WaterIsland from './WaterIsland/WaterIsland';
import Mainmap from './Mainmap';
import GardenIsland from './GardenIsland/GardenIsland';
import Lineuptitle from './Artist/Lineuptitle';
import LineupSlide from './Artist/LineupSlide';
import InfoMain from './info/InfoMain';
import Studentdue from './info/Studentdue';
import Sns from './info/Sns';
import RenewCash from './info/RenewCash';
import About from './About/About';
import Waterislandslide from './WaterIsland/slide/Waterislandslide';
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from './utils/cookie';

function App() {
	
	useEffect(() => {
		const cookie = getCookie('visitor');
		if (!cookie) {
			const currentDate = new Date();
			const expiresDate = new Date(
			  currentDate.getFullYear(),
			  currentDate.getMonth(),
			  currentDate.getDate() + 1, // 다음 날로 설정
			  0, // 시간을 00시로 설정
			  0, // 분을 00분으로 설정
			  0, // 초를 00초로 설정
			);
			// 시차 보정
			expiresDate.setMinutes(expiresDate.getMinutes() - expiresDate.getTimezoneOffset());
			setCookie('visitor', 'visitor', {path: '/', expires: expiresDate , secure: true});
			//callAPI();
		}
	}, []);

	const callAPI = () => {
		axios.get('https://api.sku-sku.com/visitors/counts')
		  .then((response) => {
			console.log(response.data);
		  })
		  .catch((error) => {
			console.error('API Error: ', error);
		  })
	}
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/Timetable" element={<TimeTable />} />
          {/* WaterIsland */}
          <Route path="/Waterisland" element={<Waterislandslide />} />
          
          {/* GardenIsland */}
          <Route path="/Gardenisland" element={<GardenIsland />} />

          {/* Artist */}
          <Route path="/Artisttitle" element={<LineupSlide />} />

          {/* 공지사항 */}
          <Route path="/InfoMain" element={<InfoMain />} />
          <Route path="/Studentdue" element={<Studentdue />} />
          <Route path="/Renewcash" element={<RenewCash />} />
          <Route path="/Sns" element={<Sns />} />

          {/* About */}
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <footer>
      </footer>
    </div>
  );
}

export default App;
