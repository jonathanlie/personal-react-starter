import { create } from 'zustand';

// Define the shape of our state
interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the store
export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light', // Initial state
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
