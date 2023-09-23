import CreateRoomDialog from '@@components/lobby/CreateRoomDialog';
import RoomCard from '@@components/lobby/RoomCard';
import usePlayerCount from '@@hooks/usePlayerCount';
import { Button } from '@material-tailwind/react';
import { FC, useState } from 'react';

const Lobby: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playerCount = usePlayerCount();

  console.log(playerCount);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="text-center text-5xl">Camere</h1>

      <h2 className="text-center font-bold">Jucatori online: {playerCount}</h2>

      <Button onClick={handleOpen} className="rounded-md bg-green-700 px-4 py-2 font-normal">
        Creaza o camera
      </Button>

      <RoomCard />

      <CreateRoomDialog isOpen={isOpen} handler={handleOpen} />
    </>
  );
};

export default Lobby;
