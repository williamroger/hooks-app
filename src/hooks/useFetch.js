import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);
  
  useEffect(() => {
    console.log(isMounted.current);
    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    }
  }, []);

  const [state, setState] = useState({ 
    data: null, 
    loading: true, 
    error: null 
  });

  useEffect(() => {
    setState({data: null, loading: true, error: null});
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          });
        }
      });
  }, [url]);

  return state;
}