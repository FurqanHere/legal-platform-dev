import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedText from './AnimatedText';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  const routeNameMap = {
    'terms': 'Terms and Conditions',
    'privacy': 'Privacy Policy',
    'support': 'Support',
    'become-a-partner': 'Become a Partner',
    'cancellation-policy': 'Cancellation Policy',
    'post-your-legal-issue': 'Post Your Legal Issue',
    'chat-with-lawyers': 'Chat with Lawyers',
    'about-legal-company': 'About Legal Company',
    'hire-a-lawyer': 'Hire a Lawyer',
    'for-corporate': 'For Corporate',
    'for-users': 'For Users',
    'for-law-firms': 'For Law Firms',
    'for-lawyers': 'For Lawyers',
    'business-portal': 'Business Portal',
    'hire-multiple-lawyers': 'Hire Multiple Lawyers',
    'law-firm': 'Law Firm',
    'corporate': 'Corporate'
  };

  return (
    <div className="container breadcrumb-container py-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <AnimatedText text="Home" />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const name = routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

            return last ? (
              <li key={to} className="breadcrumb-item active" aria-current="page">
                <AnimatedText text={name} />
              </li>
            ) : (
              <li key={to} className="breadcrumb-item">
                <Link to={to} className="breadcrumb-link">
                  <AnimatedText text={name} />
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
