import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';

import './config/i18next/i18next';
import {
  Contact,
  FunctionalTraining,
  GroupClasses,
  Home,
  KangooJumps,
  LatinoDance,
  NutritionPlans,
  PersonalTraining,
  PersonalTrainingPackage,
  Transformations,
} from './pages';
import { Footer, NavBar } from './pages/common';

const App = () => {
  return (
    <div className="min-h-screen min-w-screen flex-col bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-light)]">
      <Router>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="personal-training" element={<PersonalTrainingPackage />}>
            <Route index element={<Navigate to="pt" replace />} />
            <Route path="pt" element={<PersonalTraining />} />
            <Route path="nutrition-plans" element={<NutritionPlans />} />
          </Route>
          <Route path="group-classes" element={<GroupClasses />}>
            <Route index element={<Navigate to="kangoo-jumps" replace />} />
            <Route path="kangoo-jumps" element={<KangooJumps />} />
            <Route path="functional-training" element={<FunctionalTraining />} />
            <Route path="latino-dance" element={<LatinoDance />} />
          </Route>
          <Route path="transformations" element={<Transformations />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
