import s from './app.module.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import AppHeader from '../app-header/app-header';


function App() {

  return (
    <div className={s.app}>
      <AppHeader />
    </div>
  );
}

export default App;

