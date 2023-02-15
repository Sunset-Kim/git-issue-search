import { RepositoryList } from '@/feature/repository';
import { Header } from '@/feature/ui';
import { Nav } from '@/feature/ui/nav';
import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export function RootPage() {
  return (
    <Container as="main">
      <Header />

      <Box mb="2">
        <RepositoryList />
      </Box>

      <Nav />
      <Outlet />
    </Container>
  );
}
