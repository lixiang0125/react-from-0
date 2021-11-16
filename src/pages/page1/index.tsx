import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

const Page1 = () => {
  const history = useHistory();
  return (
    <div className="text">
      this is page1
      <button className="homepageButton" type="button" onClick={() => history.push('/')}>back to homepage</button>
    </div>
  );
};

export default Page1;
