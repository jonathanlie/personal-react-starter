import React, { useEffect, useState } from 'react'

interface ValidatedInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({
  label,
  placeholder = '',
  type = 'text',
  className = ''
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorTimeoutId, setErrorTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (errorMessage) {
      // clear timeout if any exists
      if (errorTimeoutId) {
        window.clearTimeout(errorTimeoutId);
      }

      // Set a new timeout
      const id = window.setTimeout(() => {
        setErrorMessage(null);
        setErrorTimeoutId(null);
      }, 3000);
      setErrorTimeoutId(id);
    }

    return () => {
      if (errorTimeoutId) {
        window.clearTimeout(errorTimeoutId);
      }
    }
  }, [errorMessage]);

  const validateInput = (value: string) => {
    if (value.trim() === '') {
      return 'This field is required';
    }
    if (!value.includes('@')) {
      return 'Input must contain @ symbol';
    }

    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Perform immediately as user types
    const error = validateInput(newValue);
    setErrorMessage(error);
  }

  return (
    <div className={`mb-4 w-full max-w-sm mx-auto ${className || ''}`}>
      <label
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s+/g, '-')}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-colors ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        // Accessibility attributes
        aria-invalid={errorMessage ? 'true' : 'false'}
        aria-describedby={errorMessage ? `${label.toLowerCase().replace(/\s+/g, '-')}-error` : undefined}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs italic">{errorMessage}</p>
      )}
    </div>
  )
}

export default ValidatedInput
