import React from 'react';
import { useThemeStore } from '../store/useThemeStore.ts';
import Button from './Button.tsx';

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-md bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Theme Toggler (Zustand)</h2>
      <p className="text-xl mb-6">Current Theme: <span className="font-semibold capitalize">{theme}</span></p>
      <Button
        label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        onClick={toggleTheme}
        className="bg-purple-600 hover:bg-purple-700"
      />
    </div>
  );
};

export default ThemeToggler;
