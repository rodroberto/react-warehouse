import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import UnauthorizedRoute from './UnauthorizedRoute';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CompanyRegister from '../pages/CompanyRegister';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import EditProduct from '../pages/EditProduct';
import CompanyUsers from '../pages/CompanyUsers';
import CompanyUserDetail from '../pages/CompanyUserDetail';
import MainLayout from '../components/MainLayout';
import { AuthProvider } from '../lib/contexts/AuthContext';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <Routes>
            {/* Unauthorized Routes */}
            <Route element={<UnauthorizedRoute />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/company-register' element={<CompanyRegister />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductDetail />} />
              <Route path='/products/:id/edit' element={<EditProduct />} />
              <Route path='/company/users' element={<CompanyUsers />} />
              <Route
                path='/company/users/:id'
                element={<CompanyUserDetail />}
              />
            </Route>

            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        </MainLayout>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
