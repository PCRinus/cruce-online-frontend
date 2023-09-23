import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const usePlayerCount = () => {
  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3000/lobby');

    socket.on('player-count', (data: { playerCount: number }) => {
      setPlayerCount(data.playerCount);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return playerCount;
};

export default usePlayerCount;
