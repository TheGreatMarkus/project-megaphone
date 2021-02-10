import React from 'react';
import { render } from '@testing-library/react';

import ProjectsPage from './projects-page';

describe('ProjectsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsPage />);
    expect(baseElement).toBeTruthy();
  });
});
