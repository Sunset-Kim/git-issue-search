import type { UseToastOptions } from '@chakra-ui/react';

export const defaultToastOptions: UseToastOptions = {
  title: 'Alert',
  variant: 'left-accent',
  status: 'info',
  isClosable: true,
  position: 'bottom-right',
};

export const getToastOptions = (
  message: string,
  opt?: UseToastOptions
): UseToastOptions => {
  return {
    ...defaultToastOptions,
    ...opt,
    title: message,
  };
};
