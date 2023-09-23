import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

type Room = {
  id: string;
  roomName: string;
  currentPlayerCount: number;
  maxPlayerCount: number;
  pointsToWin: number;
  turnTimeLimit: number;
};

const useRoomList = () => {
  const [roomCount, setRoomCount] = useState<number>(0);

  useEffect(() => {
    const socket = io('http://localhost:3000/room');

    socket.on('rooms', (data: Room[]) => {
      setRoomCount(data.length);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return roomCount;
};

export default useRoomList;
