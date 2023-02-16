import { Card, CardBody } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function SimpleMessage({ children }: PropsWithChildren) {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
