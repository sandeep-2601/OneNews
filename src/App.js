import './App.css';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News'

function App() {
  return (
    <>
      <Navbar />
      <div className="news-component my -3">
        <News />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
