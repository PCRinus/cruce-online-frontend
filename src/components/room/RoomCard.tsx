import { Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";

interface RoomCardProps {
  roomName: string;
  currentPlayerCount: number;
  maxPlayerCount: number;
  pointsToWin: number;
  turnTimeLimit: number;
}

const RoomCard: FC<RoomCardProps> = ({ roomName, maxPlayerCount, currentPlayerCount }: RoomCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-green-50 p-4">
      <div className='flex flex-row content-center justify-between'>
        <Typography variant="h5">{roomName}</Typography>
        <Typography variant="lead" className='flex flex-row gap-2'>
          <FaUsers className='self-center'/>
          {currentPlayerCount} / {maxPlayerCount}
        </Typography>
      </div>

      <Link to={`/room/1`} className="rounded-md bg-green-700 px-4 py-1 text-center hover:bg-red-800 hover:text-white">
        Joaca
      </Link>
    </div>
  );
};

export default RoomCard;
