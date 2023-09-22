import ky from 'ky';
import useSWRMutation from 'swr/mutation';

type CreateRoomDto = {
  roomName: string;
  playerCount: 2 | 3 | 4;
  pointsToWin: 11 | 15 | 21;
  turnTimeLimit: 15 | 20 | 30;
};

const createRoom = (url: string, { arg }: { arg: CreateRoomDto }) => {
  const { roomName, playerCount, pointsToWin, turnTimeLimit } = arg;

  ky.post(url, { json: { roomName, playerCount, pointsToWin, turnTimeLimit } }).json();
};

const useCreateRoom = () => {
  const { trigger } = useSWRMutation('http://localhost:3000/room', createRoom);

  return {
    trigger,
  };
};

export default useCreateRoom;
