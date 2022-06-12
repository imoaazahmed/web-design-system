import * as ChakraIcons from '@chakra-ui/icons';
import * as Chakra from '@chakra-ui/react';
import { Box, BoxProps } from '@chakra-ui/react';
import { mdx } from '@mdx-js/react';
import * as DesignSystem from '@tradeling/web-design-system';
import {
  Button,
  ButtonProps,
  useClipboard,
} from '@tradeling/web-design-system';
import * as Formik from 'formik';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import FocusLock from 'react-focus-lock';
import * as ReactIcons from 'react-icons/md';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export const liveEditorStyle = {
  fontSize: 14,
  marginBottom: 32,
  marginTop: 32,
  overflowX: 'auto',
  fontFamily: 'Menlo,monospace',
  borderRadius: 10,
  width: '100%',
};

export const liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
};

const LiveCodePreview = (props: BoxProps) => (
  <Box
    as={LivePreview}
    fontFamily="body"
    padding="md"
    border="1px"
    borderColor="inherit"
    rounded="md"
    {...props}
  />
);

const CopyButton = (props: ButtonProps) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    variant="default"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex={1}
    insetEnd="lg"
    {...props}
  />
);

const EditableNotice = (props: BoxProps) => {
  const bg = { light: '#fbfbfb', dark: '#011627' };

  return (
    <Box
      position="absolute"
      width="full"
      top="-1.25em"
      roundedTop="10px"
      bg={bg['dark']}
      py="2"
      zIndex={0}
      letterSpacing="wide"
      color="gray.400"
      fontSize="xs"
      fontWeight="semibold"
      textAlign="center"
      textTransform="uppercase"
      pointerEvents="none"
      {...props}
    >
      Editable Example
    </Box>
  );
};

const StarIcon = (props: BoxProps & { viewBox: string }) => {
  return (
    <Box m="2px" as="svg" fill="current" size="3" {...props}>
      <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
    </Box>
  );
};

const CodeBlock = ({
  className,
  live,
  isManual,
  render,
  children,
  ...props
}: any) => {
  // const [editorCode, setEditorCode] = useState(children);

  const language = (className && className.replace(/language-/, '')) || 'jsx';
  const { onCopy, hasCopied } = useClipboard(children);

  const liveProviderProps = {
    theme: darkTheme,
    language,
    code: children,
    scope: {
      ...DesignSystem,
      ...Formik,
      ...ReactIcons,
      ...ChakraIcons,
      ...Chakra,
      mdx,
      StarIcon,
      FocusLock,
    },
    noInline: isManual,
    ...props,
  };

  // const handleCodeChange = (newCode: string) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview />
        <Box position="relative">
          <LiveEditor
            // onChange={handleCodeChange}
            // @ts-ignore
            padding={30}
            style={liveEditorStyle as React.CSSProperties}
          />
          <CopyButton onClick={onCopy}>
            {hasCopied ? 'copied' : 'copy'}
          </CopyButton>
          <EditableNotice />
        </Box>
        <LiveError style={liveErrorStyle as React.CSSProperties} />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider {...liveProviderProps}>
          <LiveCodePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <Box position="relative">
        <LiveEditor style={liveEditorStyle as React.CSSProperties} />
        <CopyButton top="1.25em" onClick={onCopy}>
          {hasCopied ? 'copied' : 'copy'}
        </CopyButton>
      </Box>
    </LiveProvider>
  );
};

CodeBlock.defaultProps = {
  mountStylesheet: false,
};

export default CodeBlock;
