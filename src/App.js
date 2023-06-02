import {Route , Routes , Link } from 'react-router-dom'
import About from './container/about';
import Profile from './container/profile';

function App() {
 
  return (
    <div className="App">
      <Link to='/about'>about</Link>
      <Link to='/profile'>profile</Link>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
