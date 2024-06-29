import { useState } from 'react';

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});

  const submit = async (url, data) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setResponse({ type: 'success', message: 'Form submitted successfully!' });
    } catch (error) {
      setResponse({ type: 'error', message: 'Failed to submit form.' });
    }
    setIsLoading(false);
  };

  return { isLoading, response, submit };
};

export default useSubmit;
