import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className='App'>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetail />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
