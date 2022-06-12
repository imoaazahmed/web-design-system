import observeRect from '@reach/observe-rect';
import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-effect';
import useLatest from './use-latest';

const round = (value: number | undefined)=>{
  return Math.round(value??0)
}

interface Rect{
  width?: number
  height?: number
}

export function useRect<T extends Element = HTMLElement>(
  nodeRef: React.RefObject<T | undefined | null>,
  observe = true,
  onChange?: (rect: Rect) => void
): null | Rect {
  const [element, setElement] = useState(nodeRef.current);
  
  const initialRectIsSet = useRef(false);
  const initialRefIsSet = useRef(false);
  
  const [rect, setRect] = useState<Rect | null>(null);
  
  const onChangeRef = useLatest(onChange);

  useIsomorphicLayoutEffect(() => {
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      const {width, height} = element.getBoundingClientRect()
      setRect({width, height});
    }
  }, [element]);

  useIsomorphicLayoutEffect(() => {
    let elem = element;

    // State initializes before refs are placed, meaning the element state will
    // be undefined on the first render. We still want the rect on the first
    // render, so initially we'll use the nodeRef that was passed instead of
    // state for our measurements.
    if (!initialRefIsSet.current) {
      initialRefIsSet.current = true;
      elem = nodeRef.current;
    }

    if (!elem) {
      return cleanup;
    }

    const observer = observeRect(elem, rect => {
      const {width,height } = rect ??{}
      onChangeRef.current?.({width,height });
      if(round(rect?.width) !==  round(width)){
        setRect({width,height });
      }
    });

    observer?.observe();
    
    return cleanup;

    function cleanup() {
       observer?.unobserve();
    }
  }, [observe, element]);

  return rect;
}
