import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'; // Correct the import statement to include 'Home'
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      </main>
      
    </>
  );
}

export default App;
