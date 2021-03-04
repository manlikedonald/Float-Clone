import './App.css';
import BusinessMoving from './components/views/landing-page/BusinessMoving';
import CreditLine from './components/views/landing-page/CreditLine';
import Footer from './components/views/landing-page/Footer';
import HowItWorks from './components/views/landing-page/HowItWorks';
import NavBar from './components/views/landing-page/NavBar';
import SmallBusiness from './components/views/landing-page/SmallBusiness';

function App() {
  return (
    <div>
      <NavBar />
      <CreditLine />
      <BusinessMoving />
      <HowItWorks />
      <SmallBusiness />
      <Footer />
    </div>
  );
}

export default App;
