import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navebar from './Navebar';
import Home from './Components/Home';
import History from './Components/About/History';
import PrincipalDesk from './Components/About/PrincipalDesk';
import VisionMissionValue from './Components/About/VisionMissionValue';
import CampusMap from './Components/About/CampusMap';
import StrategicPlan from './Components/About/StrategicPlan';
import HumanValues from './Components/About/HumanValues';
import CoreValues from './Components/About/CoreValues';
import BestPractices from './Components/About/BestPractices';
import InstitutuionalDistinctive from './Components/About/InstitutuionalDistinctive';
import CollegeGallery from './Components/About/CollegeGallery';
import MaintenancePolicy from './Components/About/MaintenancePolicy';
import Dashboard from './admin/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navebar />}>
            {/* home page route */}
            <Route index element={<Home />} />

            {/* admin pages routes */}
            <Route path='/admin/dashboard' element={<Dashboard />} />

            {/* about pages routes */}
            <Route path='/history-of-the-college' element={<History />} />
            <Route path='/principal-desk' element={<PrincipalDesk />} />
            <Route path='/vision-mission-value' element={<VisionMissionValue />} />
            <Route path='/campus-map-layout' element={<CampusMap />} />
            <Route path='/strategic-prospective-plan' element={<StrategicPlan />} />
            <Route path='/human-values-and-professional-ethics' element={<HumanValues />} />
            <Route path='/core-values' element={<CoreValues />} />
            <Route path='/maintenance-policy' element={<MaintenancePolicy />} />
            <Route path='/best-practices' element={<BestPractices />} />
            <Route path='/institutional-distinctive' element={<InstitutuionalDistinctive />} />
            <Route path='/college-gallery' element={<CollegeGallery />} />
            <Route path='/7' element={<HumanValues />} />
            <Route path='/8' element={<HumanValues />} />
            <Route path='/9' element={<HumanValues />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
