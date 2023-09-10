import { Button } from 'flowbite-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

const Home: FC = () => {
  const { data, isLoading, error } = useSWR<number>('/player/count')

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(error)

  console.log(data)

  return (
    <>
      <h1 className="text-center text-5xl">Cruce online</h1>

      <div className="my-4 flex flex-col gap-4">
        <Link to={`rooms`} className="rounded-md bg-green-800 px-4 py-1 text-center">
          Joaca acum
        </Link>

        <Button className="rounded-md bg-gray-400 px-4 py-1">Intra in cont</Button>
      </div>
      <h2 className="text-center font-bold">Jucatori online: {data}</h2>
    </>
  )
}

export default Home
