import useCreateRoom from '@@hooks/useCreateRoom';
import { Button, Dialog, DialogBody, DialogHeader, Input, Radio, Typography } from '@material-tailwind/react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateRoomFormInput {
  roomName: string;
  playerCount: 2 | 3 | 4;
}

interface CreateRoomFormProps {
  handler: () => void;
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({ handler }: CreateRoomFormProps) => {
  const { register, handleSubmit } = useForm<CreateRoomFormInput>();
  const { trigger } = useCreateRoom();

  const onSubmit: SubmitHandler<CreateRoomFormInput> = (data) => {
    console.log(data);
    trigger(data);
    handler();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input size="lg" label="Numele camerei" {...register('roomName')} />

      <div className="flex flex-col gap-1">
        <Typography color="gray" variant="h6">
          Numarul de jucatori
        </Typography>
        <div className="flex flex-row justify-between px-4">
          <Radio {...register('playerCount')} label="2" value={2}></Radio>
          <Radio {...register('playerCount')} label="3" value={3}></Radio>
          <Radio {...register('playerCount')} label="4" value={4}></Radio>
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
