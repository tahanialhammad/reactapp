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
import BlogPost from '../pages/BlogPost';
import NoMatch from '../pages/NoMatch';

export default function Root() {
  // or
  const routes = [
    { path: '/', name: 'Home', Component: App, exact: true },
    { path: '/about', name: 'About', Component: About, exact: false },
    { path: '/contact', name: 'Contact', Component: Contact, exact: false },
    { path: '/blog', name: 'Blog', Component: Blog, exact: true },
    { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
    { path: '*', name: 'No Match', Component: NoMatch, exact: false },
  ];

  return (
    <Router>
      <div>
        <Header logo="React AppS" />
        <section>
          <Routes>
            {/* or, map over routes aaray and use path as unik key */}
            {/* {routes.map(({ path, Component, exact }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Component />}
              />
            ))} */}

            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* this way not work with Routes, may be old */}
            {/* <Route exact path="/blog">
              <Blog />
            </Route> */}
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* 404 */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
