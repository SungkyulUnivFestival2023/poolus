import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeTable from './TimeTable/TimeTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/TimeTable" element={<TimeTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
