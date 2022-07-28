// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./Style.css";
import Login from './Login';
import Register from './Register';
import Restaurant from './Restaurant';
import SinglePage from './SinglePage';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/restaurant" element={<Restaurant/>}></Route>
        {/* <Route path="signup" element={<Register/>}></Route> */}
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/singlepage" element={<SinglePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
