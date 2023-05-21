import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeTable from './TimeTable/TimeTable';
import WaterIsland from './WaterIsland/WaterIsland';
import Attraction from './WaterIsland/Attraction';
import Goods from './WaterIsland/Goods';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/TimeTable" element={<TimeTable />} />
          <Route path="/WaterIsland" element={<WaterIsland />} />
          <Route path="/WaterIsland/Attraction" element={<Attraction />} />
          <Route path="/WaterIsland/Goods" element={<Goods />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
