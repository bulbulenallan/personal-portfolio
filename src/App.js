import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'; // Correct the import statement to include 'Home'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Home/>
      <About/>
      <Skills/>
      </main>
      
    </>
  );
}

export default App;
