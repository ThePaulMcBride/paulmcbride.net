import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      {children}
    </GatsbyLink>
  );
}
