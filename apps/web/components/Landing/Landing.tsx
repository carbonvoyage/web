import Hero from './Hero';
import Navbar from '../Navbar';
import Mission from './Mission';
import Rundown from './Rundown';
import News from './News';
import Footer from '../Footer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Mission />
      <Rundown />
      <News />
      <Footer />
    </>
  );
};

export default Landing;
