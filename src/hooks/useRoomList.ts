import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

type Room = {
  roomName: string;
  currentPlayerCount: number;
  maxPlayerCount: number;
  pointsToWin: number;
  turnTimeLimit: number;
};

const useRoomList = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:3000/room');

    socket.on('rooms', (data: Room[]) => {
      setRooms(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return rooms;
};

export default useRoomList;
