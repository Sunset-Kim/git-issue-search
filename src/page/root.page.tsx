import { Header, Nav } from '@/feature/ui';
import { Box, Container, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function RootPage() {
  return (
    <Container py={2} h="100%" as="main">
      <VStack h="100%" alignItems="stretch">
        <Header mb="5" />

        <Nav />

        <Box position={'relative'} flex={1}>
          <Outlet />
        </Box>
      </VStack>
    </Container>
  );
}
