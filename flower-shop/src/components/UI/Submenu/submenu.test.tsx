import { render } from '@testing-library/react';
import { Submenu } from './Submenu';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Submenu Component', () => {
  it('renders SVG icon with default color', () => {
    render(
    <BrowserRouter>
    <Submenu iconColor="var(--color-txt)"/>
    </BrowserRouter>
    );
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();

    const path = svg?.querySelector('path');
    expect(path).toHaveAttribute('stroke', 'var(--color-txt)');
   });
   

  it('applies custom icon color', () => {
    render(
    <BrowserRouter>
    <Submenu iconColor="var(--color-footer-back)" />
    </BrowserRouter>
    );
    const path = document.querySelector('path');
    expect(path).toHaveAttribute('stroke', 'var(--color-footer-back)');
  });
});
