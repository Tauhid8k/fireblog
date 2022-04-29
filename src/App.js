import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './config/firebaseConfig';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth);
    localStorage.clear();
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <>
      <Navbar isAuth={isAuth} userSignOut={userSignOut} />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
