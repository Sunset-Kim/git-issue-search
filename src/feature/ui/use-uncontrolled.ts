import { useState } from 'react';

type UseUncontrolledProps<T> = {
  value?: T;
  defaultValue?: T;
  onChange?(value: T): void;
};

export function useUncontrolled<T>({
  value,
  defaultValue,

  onChange = () => {
    return;
  },
}: UseUncontrolledProps<T>): [T, (value: T) => void] {
  const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(
    defaultValue
  );

  const handleUncontrolledChange = (val: T) => {
    setUncontrolledValue(val);
    onChange?.(val);
  };

  if (value !== undefined) {
    return [value as T, onChange];
  }

  return [uncontrolledValue as T, handleUncontrolledChange];
}
