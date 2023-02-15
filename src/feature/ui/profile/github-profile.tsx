import {
  Avatar,
  HStack,
  StackProps,
  Text,
  ThemingProps,
} from '@chakra-ui/react';

type Props = StackProps & {
  imgUrl?: string;
  displayName?: string;
  name: string;
  imgSize?: ThemingProps<'Avatar'>['size'];
};

export function GithubProfile({
  imgUrl,
  imgSize = 'md',
  name,
  displayName,
  ...props
}: Props) {
  const _displayName = displayName || name;
  return (
    <HStack alignItems={'center'} gap={2} {...props}>
      <Avatar size={imgSize} objectFit="cover" src={imgUrl} name={name} />
      <Text>{_displayName}</Text>
    </HStack>
  );
}
