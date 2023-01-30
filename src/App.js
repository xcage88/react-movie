import './App.css';
import SignUp from './component/SignUp';
import ForgotForm from './component/ForgotForm';
import LoginForm from './component/LoginForm';
import MainPage from './component/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<LoginForm/>}/>
        <Route path='/forgot' element={<ForgotForm/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/main/*' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
