import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { Heading, HeadingProps } from '../typography';

export type CornerBadgePlacement = 'start' | 'end';

export type CornerBadgeProps = BoxProps & {
  placement?: CornerBadgePlacement;
  size?: string;
  badgeColor?: string;
};

type ElementTypes = 'wrapper' | 'badge' | 'content';

type SingleStyleProps = {
  [key in ElementTypes]: BoxProps;
};

type StyleProps = {
  baseStyles: SingleStyleProps;
  variantStyles: {
    [key in CornerBadgePlacement]: SingleStyleProps;
  };
};

const styles: StyleProps = {
  baseStyles: {
    wrapper: {
      top: 0,
      pos: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    badge: {
      // wondering why we keep it 200% ? Well the inner box which is rotated is used to create the triangle here
      // and Hypotenuse of a right angle triangle is always less than 200% of the sides.
      width: '200%',
      height: '200%',
      transformOrigin: '25%',
    },
    content: {
      position: 'absolute',
      bottom: 0,
      w: '100%',
    },
  },
  variantStyles: {
    start: {
      wrapper: {
        insetStart: 0,
      },
      badge: {
        // translate additional -10px to accommodate the box shadow within the badge
        transform: 'rotate(-45deg) translate(-25%, calc(-50% - 10px))',
      },
      content: {},
    },
    end: {
      wrapper: {
        insetEnd: 0,
      },
      badge: {
        transform: 'rotate(45deg) translate(-25%, calc(-50% - 10px))',
      },
      content: {},
    },
  },
};

const getBadgeStyles = (placement: CornerBadgePlacement) => {
  const { baseStyles, variantStyles } = styles;

  /* GET THE BASE AND VARIANT SPECIFIC STYLES */
  const {
    wrapper: baseWrapper,
    badge: baseBadge,
    content: baseContent,
  } = baseStyles;
  const {
    wrapper: variantWrapper,
    badge: variantBadge,
    content: variantContent,
  } = variantStyles[placement];

  /* MERGE THE BASE STYLES WITH VARIANT STYLES AND RETURN */
  return {
    wrapper: { ...baseWrapper, ...variantWrapper },
    badge: { ...baseBadge, ...variantBadge },
    content: { ...baseContent, ...variantContent },
  };
};

export const CornerBadge = (props: CornerBadgeProps) => {
  const {
    children,
    placement = 'start',
    size = '105px',
    badgeColor = 'orange.400',
    boxShadow,
    border,
    ...rest
  } = props;
  const { wrapper, badge, content } = getBadgeStyles(placement);
  // Add the negative translation here so the size of badge persists.
  const calculatedSize = `calc(${size} + 10px)`;

  return (
    <Box {...wrapper} width={calculatedSize} height={calculatedSize} {...rest}>
      <Box
        {...badge}
        boxShadow={boxShadow}
        border={border}
        backgroundColor={badgeColor}
      >
        <Box {...content}>{children}</Box>
      </Box>
    </Box>
  );
};

export const CornerBadgeLabel = (props: HeadingProps) => {
  const { children, ...rest } = props;

  return (
    <Heading
      color="white"
      textTransform="uppercase"
      textAlign="center"
      {...rest}
    >
      {children}
    </Heading>
  );
};
