import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-stone-200 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 px-8 py-5 shadow-lg dark:border-stone-700 dark:bg-gradient-to-r dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Link to="/" className="flex items-center gap-3">
        <span className="inline-block flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-gray-950 shadow-md">
          🍕
        </span>
        <span className="text-2xl font-extrabold tracking-widest text-yellow-400 transition hover:text-yellow-300">
          Fast Order
        </span>
      </Link>
      <div className="flex items-center gap-8">
        <SearchOrder />
        <div className="mx-2 hidden h-8 border-l border-stone-700 sm:block"></div>
        <Username />
      </div>
    </header>
  );
}

export default Header;
