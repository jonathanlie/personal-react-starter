// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Counter from './components/Counter.tsx';
import ThemeToggler from './components/ThemeToggler.tsx';
import Characters from './pages/Characters.tsx';
import { useThemeStore } from './store/useThemeStore.ts';
import ValidationForms from './pages/ValidationForms.tsx';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <nav className="mb-8 p-4 bg-blue-600 text-white rounded-lg shadow-md">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li>
              <Link to="/" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">About</Link>
            </li>
            <li>
              <Link to="/counter" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">Counter Example</Link>
            </li>
            <li>
              <Link to="/theme" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">Theme Toggler</Link>
            </li>
            <li>
              <Link to="/characters" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">GraphQL Characters</Link>
            </li>
            <li>
              <Link to="/validation" className="hover:underline text-lg font-semibold px-3 py-1 rounded hover:bg-blue-700 transition-colors text-white">Validation Forms</Link>
            </li>
          </ul>
        </nav>

        {/* Main content area styling */}
        <main className="bg-white p-8 rounded-lg shadow-xl min-h-[calc(100vh-180px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/theme" element={<ThemeToggler />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/validation" element={<ValidationForms />} />
            <Route path="*" element={<h2 className="text-xl font-bold text-red-500">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
