import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  Text,
  chakra,
} from '@chakra-ui/react';
import React from 'react';
import { FiUploadCloud } from '../../icons/react-icons/fi';
import { visuallyHidden } from '../../utils';
import { useBoolean } from '../../hooks';

const UploadIcon = (props: BoxProps) => (
  <Box as={FiUploadCloud} w="24px" h="24px" {...props} />
);

export type UploadProps = Omit<BoxProps, 'onChange'> & {
  onChange?: React.FormEventHandler<HTMLInputElement>;
};

export const Upload = (props: UploadProps) => {
  const { onChange, children, ...rest } = props;
  const [focused, setFocus] = useBoolean(false);
  return (
    <Box
      data-focus={focused ? '' : undefined}
      as="label"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="md"
      height="120px"
      boxShadow={focused ? 'outline' : undefined}
      transition="all 0.2s"
      cursor="pointer"
      {...rest}
    >
      {children}
      <chakra.input
        type="file"
        onFocus={setFocus.on}
        onBlur={setFocus.off}
        onChange={onChange}
        sx={visuallyHidden}
      />
    </Box>
  );
};

const UploadText = (props: BoxProps) => (
  <Text fontSize="sm" mt={2} color="gray.600" {...props} />
);

const UploadTitle = (props: BoxProps) => (
  <Text fontSize="lg" fontWeight="semibold" {...props} />
);

const UploadTitleGroup = (props: StackProps) => (
  <Stack isInline align="center" spacing={3} {...props} />
);

Upload.Text = UploadText;
Upload.TitleGroup = UploadTitleGroup;
Upload.Title = UploadTitle;
Upload.Icon = UploadIcon;

export default Upload;
