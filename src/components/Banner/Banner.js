import React from 'react';

function Banner({ status, action, actionText, children }) {
  return (
  <div className={`${status} banner`}>
    {children}
    {action && <button 
    onClick={action} 
    style={{border: '1px solid black', borderRadius: '0.25rem', backgroundColor: 'grey', padding: '0.5rem'}}>
      {actionText}
    </button>}
  </div>
)}

export default Banner;
