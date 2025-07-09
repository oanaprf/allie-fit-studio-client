import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Logo } from './components';
import './config/i18next/i18next';
import { Contact, GroupClasses, Home, PersonalTraining, Transformations } from './pages';
import { MainMenu } from './pages/common';

function App() {

  return (
    <div className="min-h-screen min-w-screen flex-col bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-light)]">
      <Router>
        <div className="flex justify-between items-center w-screen md:py-8 md:px-15 p-6">
          <Logo />
          <MainMenu />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/group-classes" element={<GroupClasses />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
