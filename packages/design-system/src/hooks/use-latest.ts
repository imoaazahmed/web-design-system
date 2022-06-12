import { useRef, useEffect } from 'react';

function useLatest<T>(val: T) {
  const saved = useRef<T>();

  useEffect(() => {
    saved.current = val;
  }, [val]);

  return saved;
}

export default useLatest;
