import React from 'react';
import ValidatedInput from '../components/ValidatedInput';

const ValidationForms: React.FC = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Validation Example</h2>
      <ValidatedInput
        label="Email Address"
        placeholder="e.g., your.name@example.com"
        type="email" // Use type="email" for browser-level validation hints
      />
      {/* You can add more ValidatedInput components here with different rules */}
      <ValidatedInput
        label="Password (min 6 chars)"
        placeholder="Enter your password"
        type="password"
        // You'd pass different validation rules here if `validationRules` prop was implemented
      />
    </div>
  );
};

export default ValidationForms;
