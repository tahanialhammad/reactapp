import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import Header from './Header';
import About from '../pages/About';

export default function Root() {
  return (
    <Router>
      <div>
        <Header logo="React AppS" />
        <section>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </section>
      </div>
    </Router>
  );
}
