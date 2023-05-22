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

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Nav" element={<Nav />} />
              <Route path="/TimeTable" element={<TimeTable />} />
              {/* WaterIsland */}
              <Route path="/WaterIsland" element={<WaterIsland />} />
              <Route path="/WaterIsland/Attraction" element={<WaterIslandMenu contents={"attr"}/>} />
              <Route path="/WaterIsland/Goods" element={<WaterIslandMenu contents={"goods"}/>} />
              <Route path="/Mainmap" element={<Mainmap />} />
              
              {/* GardenIsland */}
              <Route path="/GardenIsland" element={<GardenIsland />} />
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
