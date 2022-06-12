export const heading = {
  baseStyle: {
    font: 'heading',
    fontWeight: 'bold',
    lineHeight: 'short',
    letterSpacing: 'tighter',
  },
  sizes: {
    lg: { fontSize: ['2xl', '3xl'] },
    md: { fontSize: ['xl', null, '2xl'] },
    sm: { fontSize: 'xl' },
  },
};

export type HeadingSizes = keyof typeof heading.sizes;

export const text = {
  baseStyle: {
    font: 'body',
    letterSpacing: 'default',
    lineHeight: 'default',
  },
  sizes: {
    lg: { fontSize: 'lg', fontWeight: 'bold' },
    md: { fontSize: 'md' },
    sm: { fontSize: 'sm' },
    xs: { fontSize: 'xs' },
  },
};

export type TextSizes = keyof typeof text.sizes;
