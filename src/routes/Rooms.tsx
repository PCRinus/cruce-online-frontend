import Room from "@@components/Room";
import { FC } from "react";

const Rooms: FC = () => {
  return (
    <>
      <h1 className="text-center text-5xl">Camere</h1>

      <Room />
    </>
  )
};

export default Rooms;