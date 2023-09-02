import { Button } from '@mui/base';
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
      <p>This is the home page</p>
      <Button className="rounded-md bg-green-600 px-4 py-1">Create Repository</Button>
    </div>
  );
}

export default Home
