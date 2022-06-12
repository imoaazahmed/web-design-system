import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import { TextProps, Text } from '../typography';
import { Button, ButtonProps } from '../button';
import { Box, BoxProps } from '@chakra-ui/react';

export type ReadmoreProps = BoxProps & {
  isCollapsed?: boolean;
  noOfLines?: number;
};

/**
 * Check if component rendered from server side or client side and return appropriate useEffect.
 */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Calculate lines of text by dividing the element height to the text line height
 */
const getNumberOfTextLines = (
  ref: React.RefObject<HTMLParagraphElement> | null
): number | void => {
  if (!ref?.current) {
    return;
  }

  const el = ref.current;

  // Number of text lines can be computed by dividing the div height itself against text lineHeight.
  return (
    parseInt(`${el.scrollHeight}`) /
    parseInt(window.getComputedStyle(el).lineHeight)
  );
};

const defaultContextValue = {
  isCollapsed: true,
  toggleCollapse: () => {},
  noOfLines: 2,
  textRef: { current: null },
};

const ReadmoreContext = createContext(defaultContextValue);

export const Readmore = (props: ReadmoreProps) => {
  const {
    isCollapsed: defaultCollapse = true,
    noOfLines = 2,
    children,
    ...rest
  } = props;

  const textRef = useRef(null);

  const [isCollapsed, setCollapse] = useState(defaultCollapse);

  const toggleCollapse = () => setCollapse(!isCollapsed);

  const contextValues = {
    isCollapsed,
    toggleCollapse,
    noOfLines,
    textRef,
  };

  return (
    <ReadmoreContext.Provider value={{ ...contextValues }}>
      <Box maxW="100%" textAlign="start" {...rest}>
        {children}
      </Box>
    </ReadmoreContext.Provider>
  );
};

const useReadmoreContext = () => useContext(ReadmoreContext);

const ReadmoreText = (props: TextProps) => {
  const { isCollapsed, noOfLines, textRef } = useReadmoreContext();

  const { children, ...rest } = props;

  return (
    <Text
      noOfLines={isCollapsed ? noOfLines : undefined}
      ref={textRef}
      {...rest}
    >
      {children}
    </Text>
  );
};

type ReadmoreButtonProps = Omit<ButtonProps, 'children'> & {
  moreText: string;
  lessText: string;
};

const ReadmoreButton = (props: ReadmoreButtonProps) => {
  const { moreText = 'Show more', lessText = 'Show less', ...rest } = props;

  const { isCollapsed, toggleCollapse, noOfLines, textRef } =
    useReadmoreContext();

  const [hideButton, setHideButton] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const hideButton = noOfLines >= getNumberOfTextLines(textRef);
    setHideButton(hideButton);
  }, []);

  if (hideButton) {
    return null;
  }

  return (
    <Button
      variant="link"
      color="gray.800"
      cursor="pointer"
      textDecoration="underline"
      onClick={toggleCollapse}
      {...rest}
    >
      {isCollapsed ? moreText : lessText}
    </Button>
  );
};

Readmore.Button = ReadmoreButton;
Readmore.Text = ReadmoreText;
