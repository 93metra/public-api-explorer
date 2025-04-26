import s from './submit-button.module.css';

const SubmitButton = ({ children, isLoading, extraClass, onClick }) => {
  return (
    <button
      className={`${s.submitButton} ${extraClass ? extraClass : ''}`}
      type="submit"
      onClick={onClick}
      disabled={isLoading}>
      {isLoading ? 'Loading...' : `${children}`}
    </button>
  );
};

export default SubmitButton;