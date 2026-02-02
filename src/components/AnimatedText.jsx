import React from 'react';
import PropTypes from 'prop-types';

const AnimatedText = ({ 
  text, 
  className = '', 
  tag: Tag = 'span', 
  aosType = 'fade-up', 
  baseIndex = 0,
  animationDelay = 0.03
}) => {
  if (!text) return null;
  
  const parts = text.split(/(\s+)/);
  
  let charIndex = baseIndex;

  return (
    <Tag className={`animated-text-wrapper ${className}`} data-aos={aosType}>
      {parts.map((part, partIndex) => {
        if (part.match(/\s+/)) {
          return part.split('').map((char, i) => {
            const currentBaseIndex = charIndex;
            charIndex++;
            return (
              <span
                key={`space-${partIndex}-${i}`}
                className="animated-char"
                style={{ 
                  '--char-index': currentBaseIndex,
                  '--char-delay': `${animationDelay}s`
                }}
              >
                {char}
              </span>
            );
          });
        } 
        
        const wordChars = part.split('');
        return (
          <span key={`word-${partIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map((char, i) => {
              const currentBaseIndex = charIndex;
              charIndex++;
              return (
                <span
                  key={`char-${partIndex}-${i}`}
                  className="animated-char"
                  style={{ 
                    '--char-index': currentBaseIndex,
                    '--char-delay': `${animationDelay}s`
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tag: PropTypes.elementType,
  aosType: PropTypes.string,
  baseIndex: PropTypes.number,
  animationDelay: PropTypes.number
};

export default AnimatedText;
