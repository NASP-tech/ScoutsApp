import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import LoginForm from './components/authentication/LoginForm';
import Menu from './components/menu/menu';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>

        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/menu' element={<Menu />}></Route>

      </Routes>
    </Layout>


  );
}

export default App;
