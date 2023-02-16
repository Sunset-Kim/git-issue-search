import { Box, BoxProps } from '@chakra-ui/react';

export function StickyBox({ children, ...props }: BoxProps) {
  return (
    <Box position="sticky" top="0" zIndex={999} {...props}>
      {children}
    </Box>
  );
}
