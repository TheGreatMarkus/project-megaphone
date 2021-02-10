import React from 'react';
import { render } from '@testing-library/react';

import TypingText from './typing-text';

describe('TypingText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypingText />);
    expect(baseElement).toBeTruthy();
  });
});
