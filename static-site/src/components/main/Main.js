import Education from '../../pages/education/Education';
import Experience from '../../pages/experience/Experience';
import Home from '../../pages/home/home';
import { HashRouter, Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/education" exact element={<Education />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Main;
