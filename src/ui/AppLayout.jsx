import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const colorTheme = useSelector((state) => state.theme.colorTheme);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] font-sans text-stone-700">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-auto overflow-x-hidden bg-stone-50/50">
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
