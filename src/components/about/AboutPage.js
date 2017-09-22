import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Do you wanna be smart?</h1>
        <p>Of course you do.</p>
        <p>But I mean really smart...</p>
        <p>Imagine that you know exactly how much money is left in your pocket after you got the change in the market?</p>
        <p>Or maybe you wanna count the girls you've had sex with during the last another crazy week?</p>
        <p>You've had many...</p>
        <p>Cause you're smart.</p>
        <p><Link to="/play">Play FireMind</Link> and keep fit.</p>
        <p>Stay smart.</p>
        <p>That's it...</p>
      </div>
    );
  }
}

export default AboutPage;
