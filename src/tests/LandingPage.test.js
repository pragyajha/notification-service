import React from 'react';
import { render, screen } from '@testing-library/react';

import Notification from '../components/Notification';

describe('Notification', () => {
  test('renders Notification component', () => {
    render(<Notification />);

    screen.debug();
  });
});