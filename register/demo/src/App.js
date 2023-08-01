import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registerpage from './Pages/Registerpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="Registerpage" element={<Registerpage/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
