import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>FireMind</h1>
        <p>It's time to play your brain...</p>
        <Link to="play" className="btn btn-primary btn-lg">Roger that!</Link>
      </div>
    );
  }
}

export default HomePage;
