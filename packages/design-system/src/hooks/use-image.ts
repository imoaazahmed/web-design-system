import React from 'react';

type Status = 'loading' | 'loaded' | 'failed';

/**
 * useImage is used to manage the loading status of an image.
 */
export function useImage(url?: string, crossOrigin = false) {
  const [status, setStatus] = React.useState<Status>('loading');

  React.useEffect(() => {
    if (!url) return;
    const img = document.createElement('img');

    function onload() {
      setStatus('loaded');
    }

    function onerror() {
      setStatus('failed');
    }

    img.addEventListener('load', onload);
    img.addEventListener('error', onerror);

    if (crossOrigin) {
      img.crossOrigin = 'true';
    }

    img.src = url;

    return () => {
      img.removeEventListener('load', onload);
      img.removeEventListener('error', onerror);
    };
  }, [url, crossOrigin]);

  return status;
}
