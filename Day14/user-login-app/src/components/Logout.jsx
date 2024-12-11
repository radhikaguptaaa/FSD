import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({regLogout}) => {
    const navigate = useNavigate();
    useEffect(() => {
        regLogout(null);
        navigate("/");
    }, []);
  return (
    <div>
      Logout
    </div>
  );
};

export default Logout;
