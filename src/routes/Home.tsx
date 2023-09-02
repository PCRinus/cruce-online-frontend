import { Button } from '@mui/base'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <>
      <h1 className="text-center text-5xl">Cruce online</h1>

      <div className='my-4 flex flex-col gap-4'>
        <Link to={`rooms`} className="rounded-md bg-green-700 px-4 py-1 text-center">
          Joaca acum
        </Link>
        <Button className="rounded-md bg-gray-400 px-4 py-1">
          Intra in cont
        </Button>
      </div>
      <h2 className="text-center font-bold">Jucatori online: TODO</h2>
    </>
  )
}

export default Home
