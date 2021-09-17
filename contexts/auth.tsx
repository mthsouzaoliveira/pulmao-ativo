import React, { createContext, useEffect, useState } from 'react';

import userState from '../hooks/userState';

const AuthContext = createContext({ signed: false, name: '' });

const UserContextProvider = ({ children }) => {
  const userName = userState();
  const [name, setName] = useState('');
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if (userName) {
      setName(userName);
      setSigned(true);
    }
  });

  return (
    <AuthContext.Provider value={{
      signed, name, setSigned, setName,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { UserContextProvider };
export default AuthContext;
