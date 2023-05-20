import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenuHome from './NavMenu/NavMenuHome';
import MainProgram from './Program/MainProgram';
import IslandMenu from './NavMenu/IslandMenu';
import TimeTable from './Program/TimeTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NavMenuHome" element={<NavMenuHome />} />
          <Route path="/MainProgram" element={<MainProgram />} />
          <Route path="/IslandMenu" element={<IslandMenu />} />
          <Route path="/TimeTable" element={<TimeTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
