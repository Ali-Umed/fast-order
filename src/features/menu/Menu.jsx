import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredMenu = menu.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-wide text-yellow-400">
        Pizza Menu
      </h2>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search pizza..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-full border border-yellow-300 bg-stone-100 px-5 py-3 text-lg text-stone-700 shadow focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <ul className="grid gap-6 divide-y divide-stone-200 sm:grid-cols-2">
        {filteredMenu.length === 0 ? (
          <li className="col-span-2 py-8 text-center text-stone-500">
            No pizzas found.
          </li>
        ) : (
          filteredMenu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)
        )}
      </ul>
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
