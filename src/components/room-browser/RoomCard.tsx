import { FC } from 'react'
import { Link } from 'react-router-dom'

const RoomCard: FC = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-slate-200 px-4 py-2">
      <div>Numele camererei</div>
      <div>Jucatori activi</div>
      <Link
        to={`/room/1`}
        className="rounded-md bg-green-700 px-4 py-1 text-center hover:bg-red-800 hover:text-white"
      >
        Joaca
      </Link>
    </div>
  )
}

export default RoomCard
