import { Button, Dialog, DialogBody, DialogHeader, Input } from '@material-tailwind/react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface CreateAccountFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccountForm: FC = () => {
  const { register, handleSubmit } = useForm<CreateAccountFormInput>();

  const onSubmit: SubmitHandler<CreateAccountFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" size="lg" label="Email" {...register('email')} />
      <Input type="text" size="lg" label="Parola" {...register('password')} />
      <Input type="text" size="lg" label="Confirma parola" {...register('confirmPassword')} />

      <Button type="submit" className="mt-4 rounded-md bg-green-700 px-4 py-2 font-normal">
        Creeaza cont
      </Button>
    </form>
  );
};

interface CreateAccountDialogProps {
  isOpen: boolean;
  handler: () => void;
}

const CreateAccountDialog: FC<CreateAccountDialogProps> = ({
  isOpen,
  handler,
}: CreateAccountDialogProps) => {
  return (
    <Dialog open={isOpen} handler={handler}>
      <DialogHeader>Creaza un cont</DialogHeader>
      <DialogBody divider>
        <CreateAccountForm />
      </DialogBody>
    </Dialog>
  );
};

export default CreateAccountDialog;
