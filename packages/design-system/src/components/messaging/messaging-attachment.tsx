import {
  AspectRatio,
  BoxProps,
  Image,
  ImageProps,
  Box,
  Stack,
  Flex,
  FlexProps,
  StackProps,
} from '@chakra-ui/react';
import { Text, TextProps } from '../typography';
import React from 'react';
import { Button, ButtonProps } from '../button';
import { FILE_ICONS } from '../../icons/file-icons';
import {
  MessagingCardText,
  MessagingCardTime,
  MessagingCardArrow,
} from './messaging-text';

export const MessagingAttachmentCard = (props: BoxProps) => (
  <Box
    width="354px"
    borderRadius="lg"
    padding="2xs"
    paddingBottom="sm"
    boxShadow="sm"
    position="relative"
    {...props}
  />
);

export const MessagingAttachmentContent = (props: BoxProps) => (
  <Box role="group" paddingX="xs" paddingTop="md" {...props} />
);

export const MessagingAttachmentImage = (props: ImageProps) => (
  <AspectRatio borderRadius="6px" overflow="hidden" ratio={1}>
    <Image bg="gray.100" objectFit="cover" {...props} />
  </AspectRatio>
);

export const MessagingAttachmentTitle = (props: TextProps) => {
  return <Text size="md" marginBottom="sm" {...props} />;
};

export const MessagingAttachmentButton = (props: ButtonProps) => (
  <Button variant="link" fontWeight="bold" textAlign="start" {...props} />
);

const MessagingAttachmentSize = (props: TextProps) => (
  <Text
    size="sm"
    as="span"
    fontWeight="bold"
    textAlign="end"
    color="gray.800"
    {...props}
  />
);

export const MessagingFileAttachmentCard = (props: BoxProps) => (
  <MessagingAttachmentCard
    width="506px"
    borderRadius="lg"
    bg="gray.100"
    padding="sm"
    boxShadow="sm"
    position="relative"
    {...props}
  />
);

export interface MessagingAttachmentFileProps extends StackProps {
  type: keyof typeof FILE_ICONS;
}

function splitByExtension(title: string) {
  let fileName = title;
  const extension = /[.]/.exec(title) ? /[^.]+$/.exec(title)?.[0] : '';

  if (extension) {
    fileName = title.split(extension)[0];
    fileName = fileName.substring(0, fileName.length - 1);
  }
  return [fileName, extension] as const;
}

export const MessagingAttachmentFile = (
  props: MessagingAttachmentFileProps
) => {
  const { type, ...rest } = props;
  const Icon = FILE_ICONS[type];

  const [file, ext] =
    typeof props.children === 'string' ? splitByExtension(props.children) : [];

  return (
    <Stack direction="row" align="center" spacing="xs" {...rest}>
      <Icon size="24px" flexShrink={0} />
      {props.children && (
        <Text display="flex" alignItems="center" maxWidth="320px">
          <Box as="span" display="inline-block" isTruncated>
            {file}
          </Box>
          {ext && <Box as="span">{`.${ext}`}</Box>}
        </Text>
      )}
    </Stack>
  );
};

export const MessagingAttachmentFileDetails = (props: FlexProps) => (
  <Flex
    justify="space-between"
    alignItems="flex-start"
    marginBottom="sm"
    {...props}
  />
);

interface AttachmentOptions {
  /**
   * The type of file attachment
   */
  type: keyof typeof FILE_ICONS;
  /**
   * The title of the file
   */
  title: string;
  /**
   * The description of the file
   */
  description?: string;
  /**
   * The image attachment `src` url
   */
  src: string;
  /**
   * The date the file was attached
   */
  date: string;
  /**
   * The placement of the arrow
   */
  arrowPlacement?: 'start' | 'end';
  /**
   * The size of the file
   */
  fileSize?: string;
}

export type MessagingFileAttachmentProps = BoxProps &
  Omit<AttachmentOptions, 'src'>;

/**
 * Messaging Component
 *
 * Used to render an file attachment that's not an image in the Messaging Center.
 *
 * Note 🚨: If you want to render an image, use the `MessagingAttachment` component.
 */
export const MessagingFileAttachment = (
  props: MessagingFileAttachmentProps
) => {
  const {
    type,
    title,
    description,
    date,
    arrowPlacement = 'start',
    fileSize,
    children,
    bg = 'gray.100',
    ...rest
  } = props;

  return (
    <MessagingFileAttachmentCard bg={bg} {...rest}>
      <MessagingAttachmentFileDetails>
        <MessagingAttachmentFile type={type} children={title} />
        {fileSize ? (
          <Stack spacing="0">
            {children}
            <MessagingAttachmentSize size="xs" children={`(${fileSize})`} />
          </Stack>
        ) : (
          children
        )}
      </MessagingAttachmentFileDetails>
      {description && (
        <MessagingCardText maxWidth="438px" children={description} />
      )}
      <MessagingCardTime children={date} />
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingFileAttachmentCard>
  );
};

export type MessagingAttachmentProps = BoxProps &
  Omit<AttachmentOptions, 'description' | 'type'>;

/**
 * Messaging Component
 *
 * Used to render an image attachment in the Messaging Center.
 *
 * Note 🚨: If you want to render other file types that's not an image,
 * use the `MessagingFileAttachment` component.
 */
export const MessagingAttachment = (props: MessagingAttachmentProps) => {
  const {
    src,
    title,
    date,
    arrowPlacement,
    fileSize,
    children,
    bg = 'gray.100',
    ...rest
  } = props;

  return (
    <MessagingAttachmentCard bg={bg} {...rest}>
      <MessagingAttachmentImage
        src={src}
        alt={title}
        fallbackSrc="https://via.placeholder.com/346x346.png?text=Loading..."
      />
      <MessagingAttachmentContent>
        {title && <MessagingAttachmentTitle children={title} />}
        {children}
        {fileSize && <MessagingAttachmentSize children={`(${fileSize})`} />}
        <MessagingCardTime marginEnd="sm" children={date} />
      </MessagingAttachmentContent>
      <MessagingCardArrow bg={bg} placement={arrowPlacement} />
    </MessagingAttachmentCard>
  );
};
