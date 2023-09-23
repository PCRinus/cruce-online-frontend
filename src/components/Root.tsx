import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Root: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container flex grow flex-col p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
