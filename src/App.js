import Navigation from './components/Navigation';
import Header from './components/Header';
import Event from './components/Event';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">

        <Header />
      </div>
      <div className="container">
        <Event />
        <Speakers />
      </div>
      <Tickets />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
