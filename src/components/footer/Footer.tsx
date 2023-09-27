import { Typography } from '@material-tailwind/react';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col bg-gray-200 p-4">
      <Typography variant="h4">Cruce Online</Typography>
      <Typography variant='h5'>Contact</Typography>
      <Typography variant='paragraph'>Made with ❤️</Typography>
    </footer>
  );
};

export default Footer;
