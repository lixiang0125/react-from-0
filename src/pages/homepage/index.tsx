import React from 'react';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/page1');
  };

  return (
    <div className="text-4xl">
      this is homepage
      <button type="button" onClick={handleClick}>ABC</button>
    </div>
  );
};

export default Homepage;
