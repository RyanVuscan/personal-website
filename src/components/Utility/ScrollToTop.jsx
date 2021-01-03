// @ts-check
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.location.pathname === '/contact')
        window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  history: PropTypes.any.isRequired,
  children: PropTypes.any,
};

export default withRouter(ScrollToTop);
