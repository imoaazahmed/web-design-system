import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const RespiratoryIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 16 28', ...props }}>
      <path
        d="M15.94 19.319a10.781 10.781 0 00-.725-3.847 12.992 12.992 0 00-.915-1.916 14.922 14.922 0 00-3.03-3.674v-1.63a.93.93 0 00.935-.918V5.482a.93.93 0 00-.935-.919H8.465a.923.923 0 00-.8.46H6.09a2.701 2.701 0 00-.75-1.438L2.725 1.008a.4.4 0 00-.135-.09h-.045a.377.377 0 00-.12-.024H.53c-.26 0-.47.208-.47.464v8.736c0 .256.21.464.47.464h1.865a.437.437 0 00.16-.034h.075L5.08 9.14a2.062 2.062 0 001-1.323h1.59a.927.927 0 00.8.464v1.63a14.79 14.79 0 00-3 3.673 13.027 13.027 0 00-.97 1.887 10.864 10.864 0 00-.725 3.842c.003.498.058.995.165 1.481a7.937 7.937 0 00.755 1.966 9.708 9.708 0 002.35 2.775v1.156c-.003.25.097.49.277.666.18.176.425.272.678.267h3.735a.94.94 0 00.661-.27.923.923 0 00.274-.654v-1.155A9.68 9.68 0 0015 22.77c.135-.252.255-.494.365-.77.166-.389.296-.79.39-1.2.117-.486.179-.983.185-1.482v.001zm-1.375 2.232c-.03.064-.055.133-.085.197-.03.065-.075.168-.115.252l-.045.09H5.415L5.37 22c-.04-.084-.075-.168-.11-.247l-.09-.202-.09-.247a1.137 1.137 0 01-.05-.138h9.675c0 .05-.035.094-.05.138l-.09.247zm-9.75-1.309a5.72 5.72 0 01-.085-.923c.007-1.099.2-2.189.57-3.225h9.14a9.876 9.876 0 01.56 3.225c-.004.31-.03.618-.08.923H4.815zm.905-5.205c.075-.163.16-.326.245-.494.085-.167.105-.207.16-.306h7.5c.055.099.11.198.16.297.05.098.17.326.245.493l.06.134H5.665l.055-.124zm5.55-9.555v1.852H8.465V5.482h2.805zM1 1.792h.935v7.843H1V1.792zm3.62 6.53l-1.755.987V2.445l1.81 1.792c.324.335.503.782.5 1.245v1.852c.008.403-.204.78-.555.987v.001zm1.5-2.361h1.405v.923H6.13l-.01-.923zm4.205 2.306V9.65H9.4V8.267h.925zm-1.23 2.306h1.5a13.919 13.919 0 012.425 2.766H6.68a14.21 14.21 0 012.425-2.78l-.01.014zm2.63 16.143H8v-.938h3.735l-.01.938zm.31-1.847H7.69a8.74 8.74 0 01-1.72-1.842h7.795a8.876 8.876 0 01-1.72 1.828l-.01.014z"
        fill="currentColor"
        fillRule="nonzero"
      />{' '}
    </Box>
  );
};