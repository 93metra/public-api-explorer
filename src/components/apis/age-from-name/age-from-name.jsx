"use client";

import s from './age-from-name.module.css';
import { useState } from 'react';
import CodeBlock from '../../code-block/code-block';

const AgeFromName = () => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const getAge = async () => {
    if (!name.trim()) {
      setError('Invalid or empty name.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.agify.io/?nam=${encodeURIComponent(name)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      const data = await response.json();
      setAge(data.age);
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const codeBlock = `
  // Request function:

  const getAge = async () => {
    fetch('https://api.agify.io/?name=${name || 'John Doe'}')
      .then(response => response.json())
      .then(data => {
        setAge(data.age);
      });
  };


  // API response example:

  {
    "count": 277407,
    "name": "John Doe",
    "age": 74
  }
  `;

  return (
    <div className={s.age_from_name}>
      <div className={s.side}>
        <h3 className={s.side__title}>Code:</h3>
        <CodeBlock code={codeBlock} />
      </div>
      <div className={s.separator}></div>
      <div className={s.side}>
        <h3 className={s.side__title}>Try it:</h3>
        <div className={s.try_it}>
          <form
            className={s.form}
            onSubmit={(e) => {
              e.preventDefault();
              getAge();
            }}
          >
            <button
              className={s.submit_button}
              type="submit"
              disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Get Age'}
            </button>
            <input
              className={s.name_input}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value),
                  setError('')
              }
              }
              placeholder="Name"
            />
            <p className={s.result}>{age || '...'}</p>
            {error &&
              <p className={s.error}>{error}</p>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgeFromName;
