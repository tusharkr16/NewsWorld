
import Navbar from './Components/Navbar';
import './App.css';
import News from './Components/News';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path="/" element={ <News key="general1" pageSize={5} category={"general"}/>} />
     <Route path="/business" element={ <News key="buissness" pageSize={5} category={"business"}/>} />
     <Route path="/entertainment" element={ <News key="entertainment" pageSize={5} category={"entertainment"}/>} />
     <Route path="/health" element={ <News key="health" pageSize={5} category={"health"}/>} />
     <Route path="/sports" element={ <News key="sports" pageSize={5} category={"sports"}/>} />
     <Route path="/science" element={ <News key="science" pageSize={5} category={"science"}/>} />
     <Route path="/general" element={ <News key="general" pageSize={5} category={"general"}/>} />

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
