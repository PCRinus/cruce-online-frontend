/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useForm } from 'react-hook-form'

const CreateRoom: FC = () => {
  const { handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="room" id="" />
    </form>
  )
}

export default CreateRoom
