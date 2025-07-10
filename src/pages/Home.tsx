import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Welcome to the React Interview Starter Kit!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This setup includes **TypeScript**, **Tailwind CSS**, **Zustand** for state management,
        and is configured for **Jest** and **React Testing Library**.
      </p>
      <p className="text-md text-gray-600">
        Explore the navigation to see examples of different components and features.
      </p>
    </div>
  );
};

export default Home;
