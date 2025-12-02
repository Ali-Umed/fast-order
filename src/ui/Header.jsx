import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-stone-100 bg-white/80 px-8 py-4 shadow-sm backdrop-blur-md transition-all duration-300">
      <Link to="/" className="flex items-center gap-3 group">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pizza-400 to-pizza-600 text-2xl shadow-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          🍕
        </span>
        <span className="text-xl font-bold tracking-wider text-stone-800 transition-colors duration-300 group-hover:text-pizza-600">
          Fast Order
        </span>
      </Link>
      <div className="flex items-center gap-8">
        <SearchOrder />
        <div className="mx-2 hidden h-8 border-l border-stone-300 sm:block"></div>
        <Username />
      </div>
    </header>
  );
}

export default Header;
