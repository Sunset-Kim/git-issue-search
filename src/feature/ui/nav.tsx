import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab as={Link} to={'/'}>
            Search
          </Tab>
          <Tab as={Link} to={'/issues'}>
            Issues
          </Tab>
        </TabList>
      </Tabs>
    </nav>
  );
}
