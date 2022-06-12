import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export const DryGroceryIcon = (props: BoxProps) => {
  return (
    <Box as="svg" size="1em" {...{ viewBox: '0 0 27 24', ...props }}>
      <path
        d="M21.27 0l.153.005c.91 0 1.625.5 1.7 1.16 2.28.371 3.435.973 3.435 1.798v1.704a1.06 1.06 0 01-.5.844c.296.185.482.5.5.845V8.05c-.018.345-.204.66-.5.845.296.184.483.5.5.844v1.688a1.07 1.07 0 01-.5.85c.296.184.482.5.5.844v1.69a1.06 1.06 0 01-.5.844c.296.185.482.5.5.845v1.694a1.06 1.06 0 01-.5.844c.296.184.483.5.5.844v1.694c0 1.665-4.835 2.11-7.7 2.11s-7.705-.445-7.705-2.11v-.572a8.19 8.19 0 01-8.317-1.34 7.951 7.951 0 01-2.623-7.91l.155-.68.54.453c.35.291.83.377 1.26.227l.365-.128.165.345c.21.443.66.726 1.155.726s.945-.283 1.155-.726l.165-.345.365.128c.466.168.99.054 1.34-.292a1.25 1.25 0 00.295-1.323l-.13-.36.35-.163a1.26 1.26 0 00.74-1.143 1.26 1.26 0 00-.74-1.144l-.35-.163.13-.36c.09-.237.101-.496.035-.74l-.125-.494.61-.04h.44c1.042.001 2.074.2 3.04.588a1.23 1.23 0 01.465-.588 1.07 1.07 0 01-.5-.845V2.998c0-1.67 4.84-2.114 7.705-2.114h.95a1.705 1.705 0 011.63-.879zm-9.262 20.937v.637c.08.425 2.57 1.265 6.85 1.265 4.275 0 6.765-.84 6.845-1.27v-.627c-1.52.805-4.725 1.052-6.845 1.052-2.56 0-5.465-.33-6.85-1.057zm13.695-3.378c-1.52.805-4.725 1.047-6.845 1.047a26.817 26.817 0 01-4.17-.3c-.19.25-.393.491-.61.72 1.575.3 3.176.445 4.78.43a27.909 27.909 0 003.37-.198l.085.87a28.425 28.425 0 01-3.475.202 23.436 23.436 0 01-5.5-.578c-.245.187-.5.36-.765.52 1.03.463 3.285.873 6.285.873 4.275 0 6.765-.839 6.845-1.269l-.001.002c-.01-.023-.084-.153-.439-.343l-.115-.059c-.63.222-1.28.387-1.94.493l-.145-.834c2.11-.356 2.64-.84 2.64-.953zM8.158 6.35h-.03c.005.13-.005.261-.03.39a2.09 2.09 0 01.92 1.728c0 .691-.344 1.337-.92 1.73a2.085 2.085 0 01-.588 1.857 2.141 2.141 0 01-1.882.581 2.136 2.136 0 01-1.75.904 2.136 2.136 0 01-1.75-.904 2.184 2.184 0 01-1.165-.118 6.47 6.47 0 00-.08 1.022c.003 3.967 3.261 7.182 7.278 7.18 4.018-.002 7.272-3.219 7.272-7.187 0-3.967-3.258-7.183-7.275-7.183zm1 12.262v1h-1v-1h1zm-3.57-3.377v.854a.85.85 0 00-.855.844.85.85 0 00.855.845.873.873 0 00.61-.25.845.845 0 00.25-.604h.845c0 .683-.417 1.3-1.057 1.56a1.724 1.724 0 01-1.864-.368 1.672 1.672 0 01-.367-1.842 1.71 1.71 0 011.583-1.039zm5.995 0a1.277 1.277 0 011.28 1.264c.002.514-.31.98-.79 1.176a1.296 1.296 0 01-1.404-.274 1.26 1.26 0 01-.277-1.386c.2-.474.671-.782 1.191-.78zm13.57.873c-1.65.617-4.405.81-6.295.81a29.66 29.66 0 01-3.25-.178 7.561 7.561 0 01-.405.785 26.91 26.91 0 003.655.237c4.275 0 6.765-.839 6.845-1.269l-.001.002c-.01-.022-.084-.152-.435-.331zm-13.412-.002a.432.432 0 00-.468.094.42.42 0 00-.09.465c.067.158.226.26.4.258a.425.425 0 00.425-.424.423.423 0 00-.267-.393zm13.962-1.924c-1.52.805-4.725 1.052-6.845 1.052-.945 0-1.86-.044-2.725-.124-.06.277-.125.553-.21.825.975.098 1.955.148 2.935.148 4.275 0 6.765-.839 6.845-1.269zm-22.535.208v1h-1v-1h1zm11.125-.425v1h-1v-1h1zm11.405-3.17c-1.52.804-4.725 1.051-6.845 1.051-.975 0-1.905-.045-2.79-.128.07.281.122.566.155.854.71.064 1.445.118 2.21.118v.845c-.74-.01-1.455-.054-2.14-.114v.114c0 .232-.035.49-.035.726.83.073 1.695.123 2.605.123 4.275 0 6.765-.839 6.845-1.274l-.001.002c-.01-.022-.085-.148-.446-.327l-.118-.055c-1.96.721-5.365.805-5.865.805v-.844c4.36-.06 6.36-.934 6.425-1.27zM8.728 13.12v1h-1v-1h1zm3.28-3.807a1.72 1.72 0 011.562.818 1.676 1.676 0 010 1.746 1.718 1.718 0 01-1.562.818v-.844a.85.85 0 00.855-.845.85.85 0 00-.855-.844zm13.13.058c-1.65.612-4.405.81-6.295.81a27.777 27.777 0 01-3.435-.203c.145.287.275.582.385.884 1.018.102 2.042.148 3.065.14 4.275 0 6.765-.84 6.845-1.27l-.001.001c-.01-.022-.085-.15-.446-.312zm-14.27-.478v1h-1v-1h1zm14.265-2.929c-1.65.617-4.405.81-6.295.81-1.89 0-4.65-.193-6.3-.81-.49.227-.55.39-.55.39.08.424 2.57 1.264 6.85 1.264a28.964 28.964 0 003.37-.193l.105.835a28.625 28.625 0 01-3.475.202 26.983 26.983 0 01-4.765-.4c.286.303.55.623.79.963a26.5 26.5 0 004 .282c4.275 0 6.765-.835 6.845-1.269v-.628a8.641 8.641 0 01-2.5.726l-.145-.834c2.11-.356 2.64-.845 2.64-.953l-.001.004c-.01-.024-.085-.154-.45-.333zm.57-1.925c-1.52.804-4.72 1.051-6.845 1.051s-5.35-.247-6.85-1.05v.625c.08.43 2.575 1.27 6.85 1.27 4.275 0 6.765-.839 6.845-1.269zm-5.88-2.326h-.965a26.583 26.583 0 00-3.855.261v.58h-.855v-.432c-1.355.272-2.095.623-2.14.84.06.311 1.285.805 3.425 1.077v-.642h.855v.725c.765.07 1.62.11 2.57.11 4.275 0 6.765-.835 6.845-1.27-.02-.114-.605-.632-2.85-.988a1.91 1.91 0 01-1.43.563 1.74 1.74 0 01-1.6-.824zm-.395.84v1h-1v-1h1zm4.28 0v1h-1v-1h1zM21.423.863c-.52 0-.855.247-.855.42s.33.425.855.425c.525 0 .855-.252.855-.425s-.33-.42-.855-.42z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </Box>
  );
};
