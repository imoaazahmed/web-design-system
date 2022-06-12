import * as React from 'react';
import Input, { InputProps } from './input';
import TextareaAutosize from 'react-textarea-autosize';
import { TextareaAutosizeProps } from 'react-textarea-autosize';

type AutoResizeOptions = {
  minRows?: number;
  maxRows?: number;
};

export type AutoResizeInputProps = InputProps & AutoResizeOptions;

type AutoResizeStyle = React.CSSProperties & AutoResizeOptions;

const AutoResize = React.forwardRef(
  (props: Omit<TextareaAutosizeProps, 'ref'>, ref: React.Ref<any>) => {
    const { style: _style, ...rest } = props;
    const { minRows, maxRows, ...style } = _style as AutoResizeStyle;
    return (
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        ref={ref}
        style={style}
        {...rest}
      />
    );
  }
);

//todo: deprecate style prop.
export const AutoResizeInput = React.forwardRef(
  (props: AutoResizeInputProps, ref: React.Ref<any>) => {
    const { minRows = 1, maxRows = 5, ...rest } = props;
    /**
     * This is a hack to get the minRows, and maxRows prop
     * pass through the Chakra `Input` component.
     */
    const _style = { minRows, maxRows } as React.CSSProperties;
    return (
      <Input
        ref={ref}
        as={AutoResize}
        paddingEnd="3"
        {...rest}
        style={{
          ..._style,
          resize: 'none',
          transitionDuration: '200ms',
          transitionProperty: 'box-shadow, border, border-color',
          ...rest.style,
        }}
      />
    );
  }
);
