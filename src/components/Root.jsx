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
import Footer from './Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import NoMatch from '../pages/NoMatch';
import StateAndProps from "../pages/StateAndProps";
import EventListener from "../pages/EventListener";
import TodoApp from "../pages/TodoApp";
import Toggle from '../pages/Toggle';

export default function Root() {
  // or
  // const routes = [
  //   { path: '/', name: 'Home', Component: App, exact: true },
  //   { path: '/about', name: 'About', Component: About, exact: false },
  //   { path: '/contact', name: 'Contact', Component: Contact, exact: false },
  //   { path: '/state-and-props', name: 'StateAndProps', Component: StateAndProps, exact: false },
  //   { path: '/event-listener', name: 'EventListener', Component: EventListener, exact: false },
  //   { path: '/todo-app', name: 'TodoApp', Component: TodoApp, exact: false },
  //   { path: '/blog', name: 'Blog', Component: Blog, exact: true },
  //   { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
  //   { path: '*', name: 'No Match', Component: NoMatch, exact: false },
  // ];

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
            <Route path="/state-and-props" element={<StateAndProps />} />
            <Route path="/event-listener" element={<EventListener />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/todo-app" element={<TodoApp />} />
            <Route path="/Toggle" element={<Toggle />} />
            {/* this way not work with Routes, may be old */}
            {/* <Route exact path="/blog">
              <Blog />
            </Route> */}
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* 404 */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </Router>
  );
}
