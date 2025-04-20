"use client";

import s from './random-dog-image.module.css';
import CodeBlock from '../../code-block/code-block';
import { useState } from 'react';

const RandomDogImage = () => {
  const [dogUrl, setDorUrl] = useState('');

  const getDogImage = async (e) => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDorUrl(data.message);
        console.log(data);
      });
    e.preventDefault();
  }

  const codeBlock = `
  // Request function:

  const getDogImage = async () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDorUrl(data.message);
        console.log(data);
      });
  };


  // API response example:

  {
    "message": ${dogUrl || "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg"},
    "status": "success"
  }
  `

  return (
    <div className={s.random_dog_image}>
      <div className={s.side}>
        <h3 className={s.side__title}>Code:</h3>
        <CodeBlock code={codeBlock} />
      </div>
      <div className={s.separator}></div>
      <div className={s.side}>
        <h3 className={s.side__title}>Try it:</h3>
        <div className={s.try_it}>
          <button className={s.submit_button} onClick={getDogImage}>Get Dog Image</button>
          <div className={s.dog_image__container}>
            {dogUrl &&
              <img className={s.dog_image} src={dogUrl} alt="Random Dog Image" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomDogImage;