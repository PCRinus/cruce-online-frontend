import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Root: FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex grow flex-col p-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
