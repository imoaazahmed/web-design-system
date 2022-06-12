import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const FreshFoodIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 26 24', ...props }}>
      <path
        d="M21.775.685a1.694 1.694 0 011.68-.06c.895.455 2.27 1.605 1.5 4.215-.085.287-.115.587-.085.885a3.35 3.35 0 01-1.5 3.035 2.785 2.785 0 00-.395.365.296.296 0 01-.41 0 .293.293 0 01-.103-.201.295.295 0 01.073-.214c.153-.162.32-.31.5-.44a2.772 2.772 0 001.245-2.5 2.874 2.874 0 01.105-1.11c.62-2.065-.31-3.045-1.195-3.5a1.108 1.108 0 00-1.095.035c-.52.325-.675.875-.465 1.625.16.568.076 1.176-.23 1.68a1.552 1.552 0 00-.07 1.595c.165.317.29.653.375 1a.076.076 0 000 .03c.04.164.066.332.08.5.02.266.02.534 0 .8 1.065-1.945.9-4.7.9-4.73a.293.293 0 01.07-.216.293.293 0 01.205-.099.296.296 0 01.315.275c.01.15.185 3.5-1.315 5.6.389.246.689.61.855 1.04.27.837.119 1.753-.405 2.46h1.7a1.001 1.001 0 011.015.975v2.55a1 1 0 01-1 .975h-.035v1.3a.29.29 0 01-.295.295.295.295 0 01-.295-.295v-1.3H2.42v2.185h21.69a1 1 0 011 1v2.55a1 1 0 01-1 .975H1.795a1 1 0 01-.975-.975v-2.55a1 1 0 01.975-1h.035v-2.16h-.035a1 1 0 01-.975-.975v-2.55a1 1 0 01.975-1h.625a8.28 8.28 0 01-.675-3.74.3.3 0 01.514-.198.293.293 0 01.081.213 7.37 7.37 0 00.745 3.725h4.45C7.25 12.52 7 12.29 7 12.29a9.428 9.428 0 01-2.8-4.655l-.34-.065a.944.944 0 00-.82.235c-.213.2-.454.37-.715.5a.82.82 0 01-.615.05.84.84 0 01-.498-.405.84.84 0 01-.062-.64.603.603 0 000-.085c.065-.665.377-1.28.875-1.725a3.166 3.166 0 01-.33-2.39.824.824 0 01.395-.5.84.84 0 01.6-.075.82.82 0 01.585 1 3.42 3.42 0 00-.11.95.292.292 0 01-.081.212.293.293 0 01-.209.088.298.298 0 01-.212-.079.3.3 0 01-.093-.206 4.202 4.202 0 01.145-1.11.206.206 0 000-.165.225.225 0 00-.415.045c-.166.65-.069 1.34.27 1.92.072-.027.145-.049.22-.065a2.263 2.263 0 011.96.615c.174.165.322.355.44.565l.07.105a.806.806 0 01.06.885.777.777 0 01-.5.375 8.358 8.358 0 001.565 3.055c.185-.345.437-.651.74-.9a.295.295 0 01.415.04.289.289 0 01-.04.415c-.32.255-.572.585-.735.96.215.24.43.45.63.64.344.311.705.603 1.08.875h2.99A1.833 1.833 0 0011 10.15c-.435-.142-.91-.1-1.315.115a1.686 1.686 0 00-.655 1.065.29.29 0 01-.09.17.29.29 0 01-.415 0 1.904 1.904 0 01-.45-1.73c-.41-.195-.856-.3-1.31-.305a.295.295 0 01-.18-.52C7.945 7.8 8.925 8.34 9.28 8.62a1.95 1.95 0 012.305 1.205.3.3 0 010 .06 2.345 2.345 0 01.555 2.885h2.22a2.06 2.06 0 00-.67-2.085l-.06-.05a2.076 2.076 0 00-1.195-.43.295.295 0 110-.59h.185a11.502 11.502 0 00-2.285-5.735.297.297 0 01.455-.38 11.78 11.78 0 012.45 6.23c.11.04.22.085.325.135a10.258 10.258 0 00-.625-3.37.296.296 0 01.19-.375c.155-.05.32.036.37.19a10.72 10.72 0 01.635 3.975c.683.625.992 1.56.815 2.47h2.15c.336-.55.637-1.121.9-1.71.088-.207.19-.407.305-.6-.805-.025-1.75.295-2.365 1.65a.295.295 0 01-.39.15.3.3 0 01-.15-.395c.92-2.02 2.535-2.07 3.32-1.96.04-.049.084-.096.13-.14.775-2.24.44-5.1.44-5.13a.295.295 0 01.26-.325.3.3 0 01.33.26 14.943 14.943 0 01-.255 4.645c.078-.038.158-.07.24-.1.188-.39.416-.758.68-1.1.207-.275.39-.566.55-.87a3.908 3.908 0 00-.305-.795 2.133 2.133 0 01.1-2.15c.22-.365.28-.804.17-1.215-.285-1.005-.03-1.815.715-2.285zM24.11 20H1.795a.39.39 0 00-.385.385v2.55a.39.39 0 00.385.385H24.11a.39.39 0 00.385-.385v-2.55A.39.39 0 0024.11 20zm-2.245 1.57a.295.295 0 01.385-.16l.05.03a.12.12 0 01.045.035.3.3 0 010 .42.12.12 0 01-.045.035l-.05.03h-.11l.025.02a.296.296 0 01-.3-.295.318.318 0 010-.115zM3.66 21.402l.06.008h.055l.05.03.045.035a.3.3 0 010 .42l-.045.035-.05.03H3.66l-.005.02a.295.295 0 01-.205-.505l.045-.035.05-.03H3.6c.04-.01.08-.01.12 0zm20.45-8.057H1.795a.385.385 0 00-.385.385v2.55a.39.39 0 00.385.385h22.32a.39.39 0 00.385-.385l-.005-2.55a.385.385 0 00-.385-.385zm-20.464 1.38l.074.005h.055l.05.03.045.035.035.045a.255.255 0 01.03.05l.03.115c.02.098-.01.2-.08.27l-.045.035h-.22a.295.295 0 01-.235-.35v-.055a.298.298 0 01.335-.175zm18.219.165a.295.295 0 01.385-.16l.05.03a.11.11 0 01.045.085.3.3 0 010 .42.194.194 0 01-.045.035h-.16a.262.262 0 01-.12-.025.293.293 0 01-.159-.16.293.293 0 01.004-.225zm-1.115-5.4l-.165.01a2.132 2.132 0 00-1.305.62c-.334.333-.6.729-.78 1.165 0 .04-.345.805-.73 1.46h3.915c.375-.475.92-1.37.58-2.245a1.607 1.607 0 00-.89-.89l-.135-.05a1.613 1.613 0 00-.655-.06zm-17.64.4a.3.3 0 01.33.265c.038.598.242 1.173.59 1.66a.294.294 0 01.065.304.293.293 0 01-.525.061 3.752 3.752 0 01-.72-1.96.3.3 0 01.26-.33zm16.356 1.207a.298.298 0 01.314.033l.22.13c.067.035.117.1.137.176a.298.298 0 01-.032.224.29.29 0 01-.405.105l-.225-.135a.294.294 0 01-.009-.533zm.59-.785a.298.298 0 01.314.033l.39.24a.295.295 0 01-.305.5l-.39-.24a.294.294 0 01-.009-.533zM8.95 9.15a1.145 1.145 0 00-1.37-.165c.391.047.755.223 1.035.5.06.079.074.182.04.275-.08.278-.08.572 0 .85a2 2 0 01.71-.82c.383-.23.832-.325 1.275-.27a1.3 1.3 0 00-1.38-.28.295.295 0 01-.31-.09zM9.28.1c2.775-.22 3.94 1.905 4.39 3.195.182.515.475.983.86 1.37.25.251.487.515.71.79a4.08 4.08 0 01.94 2.63 5.232 5.232 0 01-.625 2.32.286.286 0 01-.171.145.287.287 0 01-.224-.02l-.02.005a.291.291 0 01-.145-.174.291.291 0 01.02-.226 4.545 4.545 0 00.555-2.055 3.499 3.499 0 00-.805-2.245 9.34 9.34 0 00-.67-.75 4.24 4.24 0 01-1-1.595C12.705 2.365 11.69.51 9.31.695c-.502.032-.977.24-1.34.59a2.152 2.152 0 00-.5 2.105 3.822 3.822 0 001.26 1.675c.537.377.859.989.865 1.645 0 .336.036.672.11 1a.3.3 0 01-.22.355.299.299 0 01-.355-.225A5.041 5.041 0 019 6.705a1.408 1.408 0 00-.64-1.15 4.32 4.32 0 01-1.5-2v-.03a3.803 3.803 0 01-.07-.475 1.13 1.13 0 00-.93.86c-.043.221-.031.45.035.665.085.317.259.603.5.825.354.315.554.767.55 1.24A2.66 2.66 0 007.1 7.675a.299.299 0 01-.18.38.295.295 0 01-.375-.18 3.305 3.305 0 01-.195-1.25c.003-.3-.125-.587-.35-.785a2.373 2.373 0 01-.64-1.1 1.952 1.952 0 01-.04-.96 1.74 1.74 0 011.5-1.335c.05-.602.317-1.165.75-1.585A2.756 2.756 0 019.28.1zm10.95 1.37a.295.295 0 110 .59c-.21.009-.42.046-.62.11a1.745 1.745 0 00-1.175 1.85c.014.138.035.275.065.41.111.485.044.995-.19 1.435a2.094 2.094 0 000 2c.185.422.28.879.28 1.34a.3.3 0 01-.295.295.293.293 0 01-.295-.3 2.76 2.76 0 00-.195-1.085 2.654 2.654 0 010-2.5c.176-.315.229-.683.15-1.035a3.798 3.798 0 01-.08-.475 2.339 2.339 0 011.57-2.5c.255-.08.518-.125.785-.135zM3.185 8.59a.3.3 0 01.255.335v.08a.295.295 0 01-.295.265h-.03a.3.3 0 01-.265-.325v-.1a.3.3 0 01.335-.255zM21.2 8.07c-.065.095-.13.185-.2.27a5.114 5.114 0 00-.395.595c.166-.018.334-.018.5 0 .059-.285.091-.575.095-.865zM4.3 6.195a1.67 1.67 0 00-1.455-.46.947.947 0 00-.255.105h-.04a1.999 1.999 0 00-.82 1.5s-.01.045-.035.125a.255.255 0 00.085.265c.072.065.178.08.265.035.21-.101.406-.23.58-.385.356-.337.855-.48 1.335-.38.205.045.41.075.62.1.078.01.153-.03.19-.1a.22.22 0 00-.03-.21 1.694 1.694 0 01-.105-.16 1.891 1.891 0 00-.335-.435zm8.24-1.255a.295.295 0 01.4.115c0 .005.04.075.105.205a.298.298 0 11-.535.26c-.055-.115-.09-.18-.09-.18a.297.297 0 01.12-.4z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};