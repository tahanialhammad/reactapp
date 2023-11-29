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
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogPost from "../pages/BlogPost";

export default function Root() {
  return (
    <Router>
      <div>
        <Header logo="React AppS" />
        <section>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* this way not work with Routes, may be old */}
            {/* <Route exact path="/blog">
              <Blog />
            </Route> */}
             <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
