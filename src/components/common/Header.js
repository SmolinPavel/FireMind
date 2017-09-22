import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}

      {/* coming soon in 1.1.0 version
      <Link to="/scores" activeClassName="active">Scores</Link>*/}
      {/*{" | "}*/}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/play" activeClassName="active">The Game</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
