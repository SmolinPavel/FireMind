import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PlayPage from './components/play/PlayPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="play" component={PlayPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
