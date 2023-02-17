import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  Spinner,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = InputProps & {
  isLoading: boolean;
  leftElement?: ReactNode;
};

export function InputWithLoading({ isLoading, leftElement, ...props }: Props) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        {isLoading ? <Spinner size="sm" /> : leftElement ?? null}
      </InputLeftElement>
      <Input {...props} />
    </InputGroup>
  );
}
