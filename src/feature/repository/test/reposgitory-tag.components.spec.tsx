import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest';
import { RepositoryTag } from '../reposgitory-tag.components';

describe('Repository Tag', () => {
  describe('onClose가 없으면', () => {
    it('close button이 렌더링 되지 않는다', () => {
      render(<RepositoryTag tagName="example" />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('onClose가 없으면', () => {
    it('close button이 렌더링 되지 않는다', async () => {
      const onClose = jest.fn();
      render(<RepositoryTag tagName="example" onClose={onClose} />);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      await userEvent.click(button);
      expect(onClose).toBeCalled();
    });
  });
});
