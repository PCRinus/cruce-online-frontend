import usePlayerCount from '@@hooks/usePlayerCount';
import { Button } from '@material-tailwind/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  const { playerCount, isLoading } = usePlayerCount();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center text-5xl">Cruce online</h1>

      <div className="my-4 flex flex-col gap-4">
        <Link to={`lobby`} className="rounded-md bg-green-800 px-4 py-2 text-center uppercase text-white">
          Joaca acum
        </Link>

        <Button className="rounded-md bg-gray-500 px-4 py-2 text-center">Intra in cont</Button>
      </div>
      <h2 className="text-center font-bold">Jucatori online: {playerCount}</h2>
    </>
  );
};

export default Home;
