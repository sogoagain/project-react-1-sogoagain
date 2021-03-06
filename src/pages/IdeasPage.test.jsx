import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';

import IdeasPage from './IdeasPage';

import IDEAS from '../__fixtures__/ideas';

jest.mock('react-redux');

describe('IdeasPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      ideas: {
        resources: IDEAS,
        loading: false,
      },
    }));
  });

  it('renders idea list', () => {
    const { container } = render(<IdeasPage />);

    expect(container).toHaveTextContent('이런 아이디어들은 어때요?');
    expect(screen.getByText(/프로그래머의 빠른 자동차/)).toBeInTheDocument();
    expect(dispatch).toBeCalled();
  });
});
