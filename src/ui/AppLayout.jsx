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
    <div
      className={`grid ${colorTheme} h-screen grid-rows-[auto_1fr_auto]  ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } `}
    >
      {isLoading && <Loader />}

      <Header />

      <div className=" overflow-scroll">
        <main className="bg mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
