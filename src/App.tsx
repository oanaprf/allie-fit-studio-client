import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './config/i18next/i18next';
import {
  Contact,
  GroupClasses,
  Home,
  NutritionPlans,
  PersonalTraining,
  Transformations,
} from './pages';
import { Footer, NavBar } from './pages/common';

function App() {
  return (
    <div className="min-h-screen min-w-screen flex-col bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-light)]">
      <Router basename="/allie-fit-studio-client/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/nutrition-plans" element={<NutritionPlans />} />
          <Route path="/group-classes" element={<GroupClasses />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
