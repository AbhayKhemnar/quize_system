import './App.css';
import Home from './pages/home/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/register/register';
import Student_Exam from './pages/Student_Exam/Student_Exam';
import { Admin } from './pages/AdminPage/Admin';
function App() {
  return (
  <div className="app">
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/Student_Exam' element={<Student_Exam/>}></Route>
       <Route path='/Admin' element={<Admin/>}></Route>


  
     </Routes>
    </BrowserRouter>
   
  </div>
  );
}

export default App;
