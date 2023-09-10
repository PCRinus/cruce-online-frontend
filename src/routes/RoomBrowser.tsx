import RoomCard from "@@components/room-browser/RoomCard";
import { FC } from "react";

const RoomBrowser: FC = () => {
  return (
    <>
      <h1 className="text-center text-5xl">Camere</h1>

      <RoomCard />
    </>
  )
};

export default RoomBrowser;