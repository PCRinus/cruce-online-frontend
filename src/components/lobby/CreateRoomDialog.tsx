import { Button, Dialog, DialogBody, DialogHeader, Input, Radio, Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { io } from 'socket.io-client';

interface CreateRoomFormInput {
  roomName: string;
  playerCount: 2 | 3 | 4;
  pointsToWin: 11 | 15 | 21;
  turnTimeLimit: 15 | 20 | 30;
}

interface CreateRoomFormProps {
  handler: () => void;
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({ handler }: CreateRoomFormProps) => {
  const { register, control, handleSubmit } = useForm<CreateRoomFormInput>();

  const onSubmit: SubmitHandler<CreateRoomFormInput> = (data) => {
    console.log(data);
    const socket = io('http://localhost:3000/room');

    socket.emit('create-room', data);

    handler();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="roomName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input size="lg" label="Numele camerei" {...field} />}
      />

      <div className="flex flex-col gap-1">
        <Typography color="gray" variant="h6">
          Numarul de jucatori
        </Typography>
        <div className="flex flex-row justify-between px-4">
          <Radio {...register('playerCount')} label="2" value={2} name="playerCount"></Radio>
          <Radio {...register('playerCount')} label="3" value={3} name="playerCount"></Radio>
          <Radio {...register('playerCount')} label="4" value={4} name="playerCount"></Radio>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Typography color="gray" variant="h6">
          Puncte pentru victorie
        </Typography>
        <div className="flex flex-row justify-between px-4">
          <Radio {...register('pointsToWin')} label="11" value={11} name="pointsToWin"></Radio>
          <Radio {...register('pointsToWin')} label="15" value={15} name="pointsToWin"></Radio>
          <Radio {...register('pointsToWin')} label="21" value={21} name="pointsToWin"></Radio>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Typography color="gray" variant="h6">
          Limita de timp per tura
        </Typography>
        <div className="flex flex-row justify-between px-4">
          <Radio {...register('turnTimeLimit')} label="15" value={15} name="turnTimeLimit"></Radio>
          <Radio {...register('turnTimeLimit')} label="20" value={20} name="turnTimeLimit"></Radio>
          <Radio {...register('turnTimeLimit')} label="30" value={30} name="turnTimeLimit"></Radio>
        </div>
      </div>

      <Button type="submit" className="mt-4 rounded-md bg-green-700 px-4 py-2 font-normal">
        Creaza camera
      </Button>
    </form>
  );
};

interface CreateRoomProps {
  isOpen: boolean;
  handler: () => void;
}

const CreateRoomDialog: FC<CreateRoomProps> = ({ isOpen, handler }: CreateRoomProps) => {
  return (
    <Dialog open={isOpen} handler={handler}>
      <DialogHeader>Creaza o camera</DialogHeader>
      <DialogBody divider>
        <CreateRoomForm handler={handler} />
      </DialogBody>
    </Dialog>
  );
};

export default CreateRoomDialog;
