import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'; // Correct the import statement to include 'Home'

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Home/>
      <About/>
      </main>
      
    </>
  );
}

export default App;
