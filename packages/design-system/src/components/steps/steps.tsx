import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { Text, TextProps } from '../typography';
import { Center } from '../shared/center';
import { FaCheck } from '../../icons/react-icons/fa';

type StepsVariants = 'numbered' | 'circle';

export interface StepsProps extends FlexProps {
  current?: number;
  variant?: StepsVariants;
  children: React.ReactNode;
  labelPlacement?: StepProps['labelPlacement'];
  dividerBg?: string;
  dividerActiveBg?: string;
}

function getStatus(current: number, index: number): Status {
  switch (true) {
    case current === index:
      return 'active';
    case current > index:
      return 'complete';
    default:
      return 'unvisited';
  }
}

const statusStyles = {
  active: {
    bg: 'orange.500',
    borderColor: 'orange.500',
    color: 'white',
  },
  complete: {
    bg: 'green.500',
    borderColor: 'green.500',
    color: 'white',
  },
  unvisited: {
    bg: 'gray.200',
    borderColor: 'gray.200',
    color: 'gray.400',
  },
};

export const Steps = (props: StepsProps) => {
  const {
    children,
    current = 0,
    variant = 'numbered',
    labelPlacement = 'bottom',
    dividerBg,
    dividerActiveBg,
    ...rest
  } = props;

  const clones = React.Children.map(children, (child, index) => {
    const isLast = React.Children.count(children) - 1 === index;
    return React.cloneElement(child as React.ReactElement<any>, {
      index: index + 1,
      isLast,
      labelAlign: index === 0 ? 'start' : isLast ? 'end' : 'center',
      status: getStatus(current, index + 1),
      variant,
      labelPlacement,
      dividerBg,
      dividerActiveBg,
    });
  });

  return (
    <Flex width="100%" {...rest}>
      {clones}
    </Flex>
  );
};

type Status = 'active' | 'complete' | 'unvisited';

const StepSeparator = (props: BoxProps) => (
  <Box flex="1" h="3px" w="100%" borderRadius="4px" mx="lg" {...props} />
);

interface StepCircleProps extends FlexProps {
  children?: React.ReactNode;
  status?: Status;
  showSeparator?: boolean;
  dividerBg?: string;
  dividerActiveBg?: string;
}
function StepCircle(props: StepCircleProps) {
  const {
    children,
    status = 'unvisited',
    showSeparator = true,
    dividerBg = 'gray.200',
    dividerActiveBg = 'blue.700',
    ...rest
  } = props;

  const isComplete = status === 'complete';
  const styles = statusStyles[status];

  return (
    <Flex align="center" {...rest}>
      <Center
        border="1px"
        flexShrink={0}
        w="48px"
        h="48px"
        borderRadius="full"
        fontWeight="bold"
        {...styles}
      >
        {children}
      </Center>
      <StepSeparator
        hidden={!showSeparator}
        bg={isComplete ? dividerActiveBg : dividerBg}
      />
    </Flex>
  );
}

function SimpleStepCircle(props: StepCircleProps) {
  const {
    children,
    status = 'unvisited',
    showSeparator = true,
    dividerBg = 'gray.200',
    dividerActiveBg = 'blue.700',
    ...rest
  } = props;

  const isComplete = status === 'complete';
  const styles = statusStyles[status];

  return (
    <Flex align="center" {...rest}>
      <Center
        border="1px"
        flexShrink={0}
        w="24px"
        h="24px"
        borderRadius="full"
        fontWeight="bold"
        {...styles}
      >
        {isComplete && <FaCheck width="12px" height="12px" />}
      </Center>
      <StepSeparator
        hidden={!showSeparator}
        bg={isComplete ? dividerActiveBg : dividerBg}
      />
    </Flex>
  );
}

export type StepProps = BoxProps & {
  index?: number;
  children?: React.ReactNode;
  isLast?: boolean;
  status?: Status;
  variant?: StepsVariants;
  /**
   * The alignment of the step label relative to the circle
   * @default 'start'
   */
  labelAlign?: 'start' | 'center' | 'end';
  /**
   * The placement of the step's label
   * @default 'top'
   */
  labelPlacement?: 'top' | 'bottom';
  /**
   * The divider color
   */
  dividerBg?: string;
  dividerActiveBg?: string;
};

const margins = {
  circle: {
    start: '0',
    center: '-48px',
    end: '-96px',
  },
  numbered: {
    start: '-20px',
    center: '-30px',
    end: '-70px',
  },
};

export const Step = (props: StepProps) => {
  const {
    index,
    status,
    children,
    isLast,
    labelPlacement = 'bottom',
    variant = 'numbered',
    labelAlign = 'start',
    dividerBg,
    dividerActiveBg,
    ...rest
  } = props;

  const isSimple = variant === 'circle';
  const isActive = status === 'active';
  const isTop = labelPlacement === 'top';

  const textStyles: TextProps = {
    width: '120px',
    marginStart: margins[variant][labelAlign],
    textAlign: labelAlign,
    size: 'sm',
    ...(isActive && {
      fontWeight: 'bold',
      color: 'blue.700',
    }),
    ...(isTop ? { mb: '14px' } : { mt: '14px' }),
  };

  return (
    <Flex
      direction={isTop ? 'column-reverse' : 'column'}
      flex={isLast ? '0' : '1'}
      {...rest}
    >
      {isSimple ? (
        <SimpleStepCircle
          dividerBg={dividerBg}
          dividerActiveBg={dividerActiveBg}
          showSeparator={!isLast}
          status={status}
        />
      ) : (
        <StepCircle
          dividerBg={dividerBg}
          dividerActiveBg={dividerActiveBg}
          showSeparator={!isLast}
          status={status}
        >
          {index}
        </StepCircle>
      )}
      <Text {...textStyles}>{children}</Text>
    </Flex>
  );
};

Steps.Step = Step;
