import s from './main-page.module.css';

const MainPage = () => {
  return (
    <div className={s.main_page}>
      <div className={s.wrapper}>
        <p className={s.main_page__arrow}>↑</p>
        <h2 className={s.main_page__title}>Choose API...</h2>
      </div>
    </div>
  );
};

export default MainPage;