import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import { action as updateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction, // np problem action work for child of order component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
