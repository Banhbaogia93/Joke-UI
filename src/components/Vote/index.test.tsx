import { render, screen } from '@testing-library/react';
import Vote from './';

test('renders vote component', () => {
  render(
    <Vote
      voteId="JK01"
      voteList={undefined}
      onUpdateVoteList={
        function (list: any): void {
          throw new Error('Function not implemented.');
        } }
    />
  );
  const ele = screen.getByTestId("vote-ele");
  expect(ele).toBeTruthy();
});
