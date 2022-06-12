import { useEffect } from 'react';
import useLatest from './use-latest';

function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  handler: (event: DocumentEventMap[K]) => void,
  element = global,
  options: AddEventListenerOptions = {}
) {
  const { capture, passive, once } = options;

  if (handler == null) {
    throw new Error('useEventListener: You forgot to pass `handler`');
  }

  const savedHandler = useLatest(handler);

  useEffect(() => {
    const isSupported = !!element?.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: DocumentEventMap[K]) =>
      savedHandler.current?.(event);

    const opts = { capture, passive, once };
    element.addEventListener<any>(type, eventListener, opts);
    return () => {
      element.removeEventListener<any>(type, eventListener, opts);
    };
  }, [savedHandler, type, element, capture, passive, once]);
}

export default useEventListener;
