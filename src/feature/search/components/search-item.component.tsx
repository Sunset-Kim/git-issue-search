import { formatNumber } from '@/feature/common';
import { useRepository, useRepositoryControl } from '@/feature/repository';
import { GithubProfile } from '@/feature/ui';
import { CheckIcon, LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { SearchResultItem } from '../schema';

type Props = {
  item: SearchResultItem;
};

export function SearchItem({ item }: Props) {
  const { repositories } = useRepository();
  const { addRepository, removeRepository } = useRepositoryControl();
  const {
    name,
    full_name,
    owner,
    html_url,
    description,
    forks,
    open_issues,
    created_at,
  } = item;
  const { avatar_url, login } = owner;

  const isActive = repositories.has(full_name);
  const handleClick = () =>
    isActive ? removeRepository(full_name) : addRepository(full_name);

  return (
    <Card w="100%">
      <CardHeader>
        <Heading as="h3" size="md">
          {name}
        </Heading>
      </CardHeader>

      <CardBody pt={0}>
        <Stack>
          <Box mb={2}>
            <Heading as="h5" size="xs" mb={1}>
              Description
            </Heading>
            <Text>{description}</Text>
          </Box>

          <HStack
            divider={<StackDivider />}
            justifyContent={'space-around'}
            textAlign={'center'}
          >
            <Box>
              <Heading as="h5" size="xs">
                Forks
              </Heading>
              <Text>{formatNumber(forks)}</Text>
            </Box>

            <Box>
              <Heading as="h5" size="xs">
                Issue count
              </Heading>
              <Text>{open_issues}</Text>
            </Box>

            <Box>
              <Heading as="h5" size="xs">
                CreatedAt
              </Heading>
              <Text>{dayjs(created_at).format('YYYY-MM-DD')}</Text>
            </Box>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter>
        <Flex
          wrap="wrap"
          w="100%"
          py={2}
          px={4}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <GithubProfile
            fontSize="sm"
            fontWeight="bold"
            imgUrl={avatar_url}
            name={login}
            displayName={full_name}
          />

          <ButtonGroup>
            <Button
              leftIcon={<LinkIcon />}
              size="sm"
              as={Link}
              href={html_url}
              target="_blank"
              isExternal
            >
              Repo
            </Button>

            <Button
              size="sm"
              colorScheme="linkedin"
              isActive={isActive}
              onClick={handleClick}
            >
              {isActive ? <CheckIcon /> : '구독'}
            </Button>
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  );
}
