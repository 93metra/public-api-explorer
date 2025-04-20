"use client";

import s from './code-block.module.css';
import copyIcon from '../../images/copy-icon.png';
import tickIcon from '../../images/tick.png';
import Image from 'next/image'
import { useState } from 'react';

const CodeBlock = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 700);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className={s.code_block}>
      <button className={s.copy_button} onClick={handleCopyClick}>
        {isCopied ? (
          <Image
            className={s.copy_icon}
            src={tickIcon}
            alt="Copied Icon"
          />
        ) : (
          <Image
            className={s.copy_icon}
            src={copyIcon}
            alt="Copy Code Icon"
          />
        )}
      </button>
      <pre><code className={s.code}>{code}</code></pre>
    </div>
  );
};

export default CodeBlock;