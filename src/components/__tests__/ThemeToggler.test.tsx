/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggler from '../ThemeToggler';
import { useThemeStore } from '../../store/useThemeStore';

jest.mock('../../store/useThemeStore', () => ({
  useThemeStore: jest.fn(),
}));

describe('ThemeToggler', () => {
  const mockUseThemeStore = useThemeStore as unknown as jest.Mock;

  beforeEach(() => {
    mockUseThemeStore.mockClear();
    mockUseThemeStore.mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    });
  });

  it('renders with the current theme', () => {
    render(<ThemeToggler />);
    // Robust check for fragmented text: query the parent <p> element
    // and check its textContent.
    const themeParagraph = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && element.textContent?.includes('Current Theme: light');
    });
    expect(themeParagraph).toBeInTheDocument();
    expect(screen.getByText('Switch to Dark Mode')).toBeInTheDocument();
  });

  it('calls toggleTheme when the button is clicked', () => {
    const toggleThemeMock = jest.fn();
    mockUseThemeStore.mockReturnValue({
      theme: 'light',
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggler />);
    const button = screen.getByText('Switch to Dark Mode');
    fireEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it('updates button text when theme changes', async () => {
    const toggleThemeMock = jest.fn();
    mockUseThemeStore.mockReturnValue({ theme: 'light', toggleTheme: toggleThemeMock });
    const { rerender } = render(<ThemeToggler />);

    // Wait for the initial text to be present
    expect(await screen.findByText('Switch to Dark Mode')).toBeInTheDocument();

    mockUseThemeStore.mockReturnValue({ theme: 'dark', toggleTheme: toggleThemeMock });
    rerender(<ThemeToggler />);

    // Wait for the text to change after rerender
    expect(await screen.findByText('Switch to Light Mode')).toBeInTheDocument();
  });
});
