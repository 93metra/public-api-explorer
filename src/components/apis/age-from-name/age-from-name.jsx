import s from './age-from-name.module.css';
import copyIcon from '../../../images/copy-icon.png';
import { useState } from 'react';

const AgeFromName = () => {
  const [Age, setAge] = useState('');
  const [Name, setName] = useState('');

  const getAge = async () => {
    fetch(`https://api.agify.io/?name=${Name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAge(data.age);
      });
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(codeBlock);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const codeBlock = `
  // Request function:

  const getAge = async () => {
    fetch('https://api.agify.io/?name=${Name || 'John Doe'}')
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
  `

  return (
    <div className={s.age_from_name}>
      <div className={s.side}>
        <h3 className={s.side__title}>Code:</h3>
        <div className={s.code_block}>
          <button className={s.copy_button} onClick={handleCopyClick}>
            <img className={s.copy_icon} src={copyIcon} alt="Copy Code Icon" />
          </button>
          <pre><code className={s.code}>{codeBlock}</code></pre>
        </div>
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
            <button className={s.submit_button} type="submit">Get Age</button>
            <input
              className={s.name_input}
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name"
            />
            <p className={s.result}>{Age || '...'}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgeFromName;
