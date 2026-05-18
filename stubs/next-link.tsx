import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = React.forwardRef<HTMLAnchorElement, any>(({ href, children, ...props }, ref) => {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return <a href={href} ref={ref} {...props}>{children}</a>;
  }
  return <RouterLink to={href} ref={ref} {...props}>{children}</RouterLink>;
});

Link.displayName = 'Link';
export default Link;
