import RoomCard from '@@components/room-browser/RoomCard'
import usePlayerCount from '@@hooks/usePlayerCount'
import { FC, useEffect } from 'react'
import { io } from 'socket.io-client'

const Lobby: FC = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000/lobby-ws')

    return () => {
      socket.disconnect()
    }
  }, [])

  const { playerCount } = usePlayerCount()

  return (
    <>
      <h1 className="text-center text-5xl">Camere</h1>

      <h2 className="text-center font-bold">Jucatori online: {playerCount}</h2>

      <RoomCard />
    </>
  )
}

export default Lobby
