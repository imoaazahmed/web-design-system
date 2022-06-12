import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const PantryIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 25 27', ...props }}>
      <path
        d="M24.387.26a.741.741 0 00-.948.424l-4.844 12.524v-1.245a.2.2 0 000-.049v-.119l-.03-.039-.04-.03h-.074L9.717 9.045h-.2l-4.25 1.279a.304.304 0 00-.187.054l-4.178 1.26h-.03a.214.214 0 00-.044.03H.787l-.084.098v.099a.2.2 0 000 .049v5.502a.281.281 0 000 .058l.035.055.04.05a.215.215 0 00.054.034l.059.034.76.227v5.364a.29.29 0 000 .059l.035.054c.012.016.025.03.04.044l.054.04.06.03 8.686 2.622a.33.33 0 00.197 0l4.568-1.373.044.494c.094.987 3.057 1.062 3.98 1.062.924 0 3.882-.08 3.98-1.062l.342-3.65a.162.162 0 000-.044l.33-3.486a1.18 1.18 0 00.326-.257.332.332 0 00.154-.277v-.464a.326.326 0 00-.03-.138c-.306-1.176-4.588-1.22-5.091-1.22h-.094l5.58-14.454a.743.743 0 00-.424-.958h-.001zM9.617 9.726l7.452 2.237-3.136.939-7.452-2.237 3.136-.939zM5.301 11.02l7.452 2.227-3.136.939-7.452-2.223 3.136-.943zm-3.98 6.138v-4.74l7.975 2.39v4.74l-7.975-2.39zm8.963 8.144l-7.957-2.386v-4.73l7.19 2.158.766.232v4.74-.014h.001zm.681 0v-4.741l3.827-1.15.43 4.612-4.257 1.279zm3.27-8.445a.353.353 0 00-.05.163v.35a.33.33 0 00.044.154c.08.214.236.39.44.494v.108l-4.716 1.418v-4.741l7.955-2.39v2.548l-.296.755c-1.496.134-3.15.43-3.378 1.141h.001zm1.07.163a5.326 5.326 0 012.006-.494l-.356.914a4.677 4.677 0 01-1.654-.42h.005-.001zm7.324 8.08c-.207.172-1.358.493-3.313.493-1.956 0-3.107-.311-3.304-.494l-.642-6.815c.473.13.955.222 1.442.277.494.464 3.175 2.963 4.711 3.605l.084.034c.333.178.697.291 1.072.336a.664.664 0 00.202-.044l-.252 2.607v.001zm.341-3.67a1.44 1.44 0 01-.291.405 2.235 2.235 0 01-.805-.277l-.094-.04c-1.077-.458-2.86-1.974-3.857-2.873.454.03.919.05 1.393.05 1.33.026 2.657-.119 3.95-.43l-.296 3.165zm-3.654-5.012c2.33 0 3.698.365 4.024.592-.326.227-1.693.588-4.024.588h-.835l.445-1.146.39-.034z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};