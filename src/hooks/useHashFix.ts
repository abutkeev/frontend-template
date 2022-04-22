import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useHashFix = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.location.hash.startsWith('#/')) {
      navigate(`/${document.location.hash.slice(1)}`);
    }
  }, [document.location.hash]);
};

export default useHashFix;
