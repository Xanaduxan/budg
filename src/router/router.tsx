import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Tranactions, {
  transactionAction,
  transactionLoader,
} from '../pages/Transactions';
import Categories, {
  categoriesActions,
  categoryLoader,
} from '../pages/Categories';
import Auth from '../pages/Auth';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'transactions',
        action: transactionAction,
        loader: transactionLoader,
        element: (
          <ProtectedRoute>
            <Tranactions />
          </ProtectedRoute>
        ),
      },
      {
        path: 'categories',
        action: categoriesActions,
        loader: categoryLoader,
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
