import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllStudents from './components/AllStudents';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/add" element={<AddStudent />} />
          <Route exact path="/" element={<AllStudents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
