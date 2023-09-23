import CreateRoomDialog from '@@components/lobby/CreateRoomDialog';
import RoomCard from '@@components/room/RoomCard';
import usePlayerCount from '@@hooks/usePlayerCount';
import useRoomList from '@@hooks/useRoomList';
import { Button, Typography } from '@material-tailwind/react';
import { FC, useState } from 'react';

const Lobby: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const playerCount = usePlayerCount();
  const rooms = useRoomList();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <Typography variant="h3">Camere</Typography>
        <Typography variant="lead">Jucatori online: {playerCount}</Typography>
      </div>

      <Button onClick={handleOpen} className="rounded-md bg-blue-700 px-4 py-2 font-normal">
        Creaza o camera
      </Button>

      {rooms.map((room) => (
        <RoomCard
          roomName={room.roomName}
          maxPlayerCount={room.maxPlayerCount}
          currentPlayerCount={room.currentPlayerCount}
          pointsToWin={room.pointsToWin}
          turnTimeLimit={room.turnTimeLimit}
          key={room.roomName}
        />
      ))}

      <CreateRoomDialog isOpen={isOpen} handler={handleOpen} />
    </div>
  );
};

export default Lobby;
