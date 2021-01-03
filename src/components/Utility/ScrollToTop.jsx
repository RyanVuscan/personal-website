// @ts-check
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/* 
  scroll-behaviour: 'smooth' doesn't work on safari and late IE, so we introduce this polyfill
  https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
*/

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.location.pathname === '/contact')
        window.scrollTo({ top: (window.innerHeight * 2) / 3, behavior: 'smooth' });
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
