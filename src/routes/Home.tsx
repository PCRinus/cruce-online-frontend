import { Button, Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className='flex flex-col justify-center gap-8'>
      <Typography variant='h1'>Cruce online</Typography>

      <div className="flex flex-col gap-4">
        <Link to={`lobby`} className="rounded-md bg-green-800 px-4 py-2 text-center uppercase text-white">
          Joaca acum
        </Link>
        <Button className="rounded-md bg-gray-500 px-4 py-2 text-center">Intra in cont</Button>
      </div>
    </div>
  );
};

export default Home;
