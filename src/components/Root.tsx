import { FC } from "react";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <div className="container flex flex-col gap-4 p-4">
      <Outlet />
    </div>
  );
};

export default Root;