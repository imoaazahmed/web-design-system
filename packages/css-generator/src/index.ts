import generateSpacing from './spacing';
import generateTypography from './typography';
import generateColors from './colors';
import generateInput from './input';
import generateButton from './button';
import { mergeCSSFiles } from './utils';

generateSpacing();
generateTypography();
generateColors();
generateInput();
generateButton();

mergeCSSFiles('output', 'dist/tradeling.min.css');
mergeCSSFiles('output', 'dist/tradeling.css', false);
