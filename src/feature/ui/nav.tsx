import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LIST = [
  {
    path: '/',
    title: 'Search',
  },
  {
    path: '/issues',
    title: 'Issues',
  },
];

export function Nav() {
  const { pathname } = useLocation();

  return (
    <nav>
      <Tabs
        index={NAV_LIST.findIndex(({ path }) => path === pathname)}
        isFitted
        variant="enclosed"
      >
        <TabList>
          {NAV_LIST.map(({ path, title }) => (
            <Tab key={path + title} as={Link} to={path}>
              {title}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </nav>
  );
}
