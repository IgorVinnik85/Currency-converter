import css from '../App/App.module.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';


const Home = lazy(() => import('pages/Home/Home'));
const Exchange = lazy(() => import('pages/Exchange'));


const App = () => {
  return (
    <div className={css.wrap}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exchange" element={<Exchange />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
//
