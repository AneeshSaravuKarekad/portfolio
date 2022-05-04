import 'boxicons/css/boxicons.min.css';

import { Routes, Route } from 'react-router-dom';
import { About, Contact, Hero, Projects } from './containers';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />

          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
