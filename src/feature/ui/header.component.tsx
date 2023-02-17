import { Center, CenterProps, Heading } from '@chakra-ui/react';

export function Header({ ...props }: CenterProps) {
  return (
    <Center as="header" {...props}>
      <Heading as="h1">Github Issue Searcher</Heading>
    </Center>
  );
}
