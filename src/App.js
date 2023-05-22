import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeTable from './TimeTable/TimeTable';
import WaterIsland from './WaterIsland/WaterIsland';
import Attraction from './WaterIsland/Attraction';
import Goods from './WaterIsland/Goods';
import Home from './TimeTable/Home';
import Nav from './Nav';
import GoodsCarousel from './WaterIsland/GoodsCarousel';
import WaterIslandMenu from './WaterIsland/Carousel/WaterIslandMenu';
import Carouselgoods from './WaterIsland/Carousel/Carouselgoods';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/Nav" element={<Nav />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/TimeTable" element={<TimeTable />} />
              {/* WaterIsland */}
              <Route path="/WaterIsland" element={<WaterIsland />} />
              <Route path="/WaterIsland/Attraction" element={<WaterIslandMenu contents={"attr"}/>} />
              <Route path="/WaterIsland/Goods" element={<WaterIslandMenu contents={"goods"}/>} />
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
