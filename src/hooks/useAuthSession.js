import { useState, useEffect } from 'react';

export function useAuthSession() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('letsgoIELTS_user');
    setIsLoggedIn(!!user);
    setIsLoading(false);
  }, []);

  return { isLoggedIn, isLoading };
}
