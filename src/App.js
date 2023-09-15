import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'; // Correct the import statement to include 'Home'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
