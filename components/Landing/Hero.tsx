import Navbar from '../Navbar';
import s from './Landing.module.css';

export default function Hero() {
  return (
    <section
      className={`${s.hero} lg:h-screen w-screen bg-hero bg-cover lg:bg-center bg-no-repeat`}
    >
      <Navbar />
    </section>
  );
}
