import React from 'react';
import { render } from '@testing-library/react';

import TopBarButton from './top-bar-button';

describe('TopBarButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopBarButton />);
    expect(baseElement).toBeTruthy();
  });
});
