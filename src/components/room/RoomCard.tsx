import { Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaClock } from 'react-icons/fa';
import { IoMdTrophy } from 'react-icons/io';

interface RoomCardProps {
  id: string;
  roomName: string;
  currentPlayerCount: number;
  maxPlayerCount: number;
  pointsToWin: number;
  turnTimeLimit: number;
}

const RoomCard: FC<RoomCardProps> = ({
  id,
  roomName,
  maxPlayerCount,
  currentPlayerCount,
  pointsToWin,
  turnTimeLimit,
}: RoomCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-green-50 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Typography variant="h5" className="capitalize">
            {roomName}
          </Typography>
          <Typography variant="paragraph" className="capitalize">
            #{id}
          </Typography>
        </div>
        <div className="flex justify-between gap-2">
          <Typography variant="lead" className="flex flex-row gap-2">
            <FaUsers className="self-center" />
            {currentPlayerCount} / {maxPlayerCount}
          </Typography>

          <Typography variant="lead" className="flex flex-row gap-2">
            <IoMdTrophy className="self-center" />
            {pointsToWin}
          </Typography>

          <Typography variant="lead" className="flex flex-row gap-2">
            <FaClock className="self-center" />
            {turnTimeLimit}
          </Typography>
        </div>
      </div>

      <Link
        to={`/room/${id}`}
        className="rounded-md bg-green-700 px-4 py-1 text-center hover:bg-red-800 hover:text-white"
      >
        Joaca acum
      </Link>
    </div>
  );
};

export default RoomCard;
