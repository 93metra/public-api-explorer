"use client";

import s from './random-joke.module.css';
import CodeBlock from '../../code-block/code-block';
import SubmitButton from '../../UI/button/submit-button/submit-button';
import { useState } from 'react';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getJoke = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      const data = await response.json();
      setJoke(data);
      console.log(data);

    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const codeBlock = `
  // Request function:

  const getJoke = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
  try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      const data = await response.json();
      setJoke(data);
      console.log(data);

    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };


  // API response example:

  { "type": "general",
    "setup": "How do the trees get on the internet?",
    "punchline": "They log on.",
    "id": 120
  }
  `;

  return (
    <div className={s.randomJoke}>
      <div className={s.side}>
        <h3 className={s.side__title}>Code:</h3>
        <CodeBlock code={codeBlock} />
      </div>
      <div className={s.separator}></div>
      <div className={s.side}>
        <h3 className={s.side__title}>Try it:</h3>
        <div className={s.try_it}>
          <SubmitButton
            children='Get A Joke'
            isLoading={isLoading}
            onClick={getJoke}
            extraClass={s.submitButton}
          />
          {error &&
            <p className={s.error}>{error}</p>
          }
          <div className={s.jokeContainer}>
            <p className={s.jokeSetup}>{joke.setup && `- ${joke.setup}`}</p>
            <p className={s.jokePunchline}>{joke.punchline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomJoke;