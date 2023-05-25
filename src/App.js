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


function App() {
  return (
    <div className="App">
      <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Nav" element={<Nav />} />
              <Route path="/Timetable" element={<TimeTable />} />
              {/* WaterIsland */}
              <Route path="/Waterisland" element={<WaterIsland />} />
              <Route path="/Waterisland/Attraction" element={<WaterIslandMenu contents={"attr"}/>} />
              <Route path="/Waterisland/Goods" element={<WaterIslandMenu contents={"goods"}/>} />
              <Route path="/Mainmap" element={<Mainmap />} />
              
              {/* GardenIsland */}
              <Route path="/Gardenisland" element={<GardenIsland />} />

              {/* Artist */}
              <Route path="/Artisttitle" element={<Lineuptitle />} />
              <Route path="/Artistlineup" element={<LineupSlide />} />
              {/* 공지사항 */}
              <Route path="/InfoMain" element={<InfoMain />} />
              <Route path="/Studentdue" element={<Studentdue />} />
              <Route path="/Renewcash" element={<RenewCash />} />
              <Route path="/Sns" element={<Sns />} />
            </Routes>
          </BrowserRouter>
        </div>
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
