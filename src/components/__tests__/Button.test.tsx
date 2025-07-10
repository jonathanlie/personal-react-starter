/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button'; // Adjust path if necessary

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Create a mock function
    render(<Button label="Test Button" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Test Button'));

    // Assert that the mock function was called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button label="Styled Button" onClick={() => {}} className="bg-red-500" />);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('bg-red-500');
  });
});
