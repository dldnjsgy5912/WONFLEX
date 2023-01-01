import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="con-title">
      <img
        src="logo_transparent.png"
        alt=""
        onClick={() => {
          navigate('/');
        }}
        width="100%"
        className="title"
      />
    </div>
  );
};

export default Header;
