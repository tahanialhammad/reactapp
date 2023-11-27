import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';

// switch is old , now is route https://kinsta.com/knowledgebase/attempted-import-error-switch-is-not-exported-from-react-router-dom/#:~:text=%2Ddom'%E2%80%9D%20Error-,What%20Causes%20the%20%E2%80%9C'Switch'%20is%20not%20exported%20from%20',with%20the%20component. 


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
