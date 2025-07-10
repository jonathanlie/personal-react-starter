import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h1>
      <p className="text-lg text-gray-700 mb-4">
        This starter kit is designed to give you a quick and robust environment for live coding interviews.
      </p>
      <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-600">
        <li>Built with React and TypeScript.</li>
        <li>Styled using Tailwind CSS for rapid UI development.</li>
        <li>State management handled by Zustand.</li>
        <li>Includes Jest and React Testing Library for comprehensive testing.</li>
        <li>Configured with Vite for blazing-fast development.</li>
      </ul>
      <p className="mt-6 text-md text-gray-600">
        Feel free to modify, extend, and experiment with these features during your interview.
      </p>
    </div>
  );
};

export default About;
