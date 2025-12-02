import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-3xl font-bold text-stone-800 md:text-5xl">
        The best pizza.
        <br />
        <span className="bg-gradient-to-r from-pizza-500 to-pizza-600 bg-clip-text text-transparent">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type={'primary'}>
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
