import Transformations from '../transformations/Transformations';
import AboutMe from './aboutMe/AboutMe';
import Header from './header/Header';
import Services from './services/Services';

const Home = () => {
  return (
    <div className="mt-10 flex flex-col items-center md:mt-15">
      <Header />
      <Services />
      <AboutMe />
      <Transformations className="bg-primary" />
    </div>
  );
};

export default Home;
