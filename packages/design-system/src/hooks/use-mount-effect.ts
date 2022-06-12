import { useEffect, useState } from 'react';

/**
 * React hook at invokes a callback on mount only
 */
function useMountedEffect(fn: () => void) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      fn();
    }
  }, [mounted, fn]);
}

export default useMountedEffect;
