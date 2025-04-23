import s from './app.module.css';
import AppHeader from '../app-header/app-header';
import MainPage from '../welcome-page/welcome-page';
import AgeFromName from '../apis/age-from-name/age-from-name';
import RandomDogImage from '../apis/random-dog-image/random-dog-image';
import { Routes, Route, Navigate } from 'react-router-dom'; 

function App() {

  return (
    <div className={s.app}>
      <AppHeader />
        <Routes> 
          <Route path="/" element={<MainPage />} />
          <Route path="/age-from-name" element={<AgeFromName />} />
          <Route path="/random-dog-image" element={<RandomDogImage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;

