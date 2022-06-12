import {
  RadioGroup,
  Box,
  Collapse,
  RadioGroupProps,
  BoxProps,
} from '@chakra-ui/react';
import { callAllHandlers } from '../../utils';
import React from 'react';
import { Radio } from '../radio';

interface RadioCardOptions {
  /**
   * If `true`, the radio card will be checked
   */
  isChecked?: boolean;
  /**
   * If `true`, the radio card will be disabled
   */
  isDisabled?: boolean;
  /**
   * If `true`, the radio card will be readonly
   */
  isReadOnly?: boolean;
  /**
   * The html radio `name` attribute
   */
  name?: string;
  /**
   * The html radio `value` attribute
   */
  value: string;
  /**
   * The html radio `id` attribute
   */
  id?: string;
}

type RadioCardContextType = Pick<
  RadioCardOptions,
  'isChecked' | 'isDisabled' | 'isReadOnly'
> & { isFocused: boolean };

const RadioCardContext = React.createContext<RadioCardContextType>({} as any);
const useRadioContext = () => React.useContext(RadioCardContext);
RadioCardContext.displayName = 'RadioCardContext';

export type RadioCardProps = BoxProps & RadioCardOptions;

/**
 * RadioCard
 *
 * Used to render a radio as a card.
 *
 * It composes the `Radio` component and should be
 * used within `RadioCardGroup`
 */
export const RadioCard = (props: RadioCardProps) => {
  const {
    id,
    isChecked,
    name,
    value,
    children,
    isDisabled,
    isReadOnly,
    onChange,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <RadioCardContext.Provider
      value={{ isChecked, isFocused, isReadOnly, isDisabled }}
    >
      <Box
        as="label"
        borderBottom="1px solid"
        borderColor="gray.200"
        display="flex"
        alignItems="flex-start"
        padding="md"
        transition="box-shadow 0.2s"
        boxShadow={isFocused ? 'outline' : undefined}
        {...{ htmlFor: id, ...rest }}
      >
        <Radio
          as="div"
          id={id}
          display="inline-flex"
          marginEnd="md"
          value={value}
          isChecked={isChecked}
          onChange={onChange}
          isDisabled={isDisabled}
          onFocus={callAllHandlers(props.onFocus, () => setIsFocused(true))}
          onBlur={callAllHandlers(props.onBlur, () => setIsFocused(false))}
        />
        <Box opacity={isDisabled ? 0.6 : undefined}>{children}</Box>
      </Box>
    </RadioCardContext.Provider>
  );
};

export type RadioCardGroupProps = Omit<RadioGroupProps, 'onChange'> & {
  onChange?(value: any): void;
};

/**
 * RadioCardGroup
 *
 * Used to render a group of radio cards
 *
 * It composes the `RadioGroup` component and should only contain
 * `RadioCard` as children
 */
export const RadioCardGroup = (props: RadioCardGroupProps) => {
  return (
    <RadioGroup
      border="1px solid"
      borderColor="gray.200"
      borderBottom="0"
      spacing="0"
      {...props}
      onChange={value => props.onChange?.(value)}
    />
  );
};

/**
 * RadioCardLabel
 *
 * Used to render a label for radio card
 */
export const RadioCardLabel = (props: BoxProps) => {
  const { isChecked } = useRadioContext();

  return (
    <Box
      color={isChecked ? 'blue.600' : 'inherit'}
      fontWeight="bold"
      lineHeight="normal"
      {...props}
    />
  );
};

/**
 * RadioCardContent
 *
 * Used to render additional content for radio card.
 *
 * It composes the `Collapse` component for smooth height/open
 * animations
 */
export const RadioCardContent = (props: BoxProps) => {
  const { isChecked } = useRadioContext();
  return (
    <Collapse in={isChecked}>
      <Box {...props} />
    </Collapse>
  );
};
