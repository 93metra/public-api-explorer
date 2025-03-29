import s from './app.module.css';
import AppHeader from '../app-header/app-header';
import MainPage from '../main-page/main-page';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route

function App() {

  return (
    <div className={s.app}>
      <AppHeader />
        <Routes> 
          <Route path="/" element={<MainPage />} />
        </Routes>
    </div>
  );
}

export default App;

