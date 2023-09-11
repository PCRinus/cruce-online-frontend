import ky from 'ky';
import useSWRMutation from 'swr/mutation';

type CreateRoomDto = {
  roomName: string;
  playerCount: 2 | 3 | 4;
};

const createRoom = (url: string, { arg }: { arg: CreateRoomDto }) => {
  const { roomName: name, playerCount } = arg;
  ky.post(url, { json: { name, playerCount } }).json();
};

const useCreateRoom = () => {
  const { trigger } = useSWRMutation('http://localhost:3000/room', createRoom);

  return {
    trigger,
  };
};

export default useCreateRoom;
