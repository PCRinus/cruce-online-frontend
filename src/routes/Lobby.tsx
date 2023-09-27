import CreateRoomDialog from '@@components/room/CreateRoomDialog';
import RoomCard from '@@components/room/RoomCard';
import Skeleton from '@@components/ui/Skeleton';
import useRoomCount from '@@hooks/useRoomCount';
import useRoomList from '@@hooks/useRoomList';
import { Button, Typography } from '@material-tailwind/react';
import { FC, useState } from 'react';

const Lobby: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const roomCount = useRoomCount();
  const rooms = useRoomList();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <Typography variant="h2">Camere</Typography>
        {isNaN(roomCount) ? (
          <Skeleton />
        ) : (
          <Typography variant="lead">Camere disponibile: {roomCount}</Typography>
        )}
      </div>

      <Button onClick={handleOpen} className="rounded-md bg-blue-700 px-4 py-2 font-normal">
        Creaza o camera
      </Button>

      {!rooms.length ? (
        <Typography variant="h3">Nu sunt camere disponibile</Typography>
      ) : (
        rooms.map((room) => (
          <RoomCard
            id={room.id}
            roomName={room.roomName}
            maxPlayerCount={room.maxPlayerCount}
            currentPlayerCount={room.currentPlayerCount}
            pointsToWin={room.pointsToWin}
            turnTimeLimit={room.turnTimeLimit}
            key={room.id}
          />
        ))
      )}

      <CreateRoomDialog isOpen={isOpen} handler={handleOpen} />
    </div>
  );
};

export default Lobby;
