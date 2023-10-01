import { Button, Dialog, DialogBody, DialogHeader, Input } from '@material-tailwind/react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInFormInput {
  email: string;
  password: string;
}

const SignInDialogForm: FC = () => {
  const { register, handleSubmit } = useForm<SignInFormInput>();

  const onSubmit: SubmitHandler<SignInFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" size="lg" label="Email" {...register('email')} />
      <Input type="text" size="lg" label="Parola" {...register('password')} />

      <Button type="submit" className="mt-4 rounded-md bg-green-700 px-4 py-2 font-normal">
        Login
      </Button>
    </form>
  );
};

interface SignInDialogProps {
  isOpen: boolean;
  handler: () => void;
}

const SignInDialog: FC<SignInDialogProps> = ({ isOpen, handler }: SignInDialogProps) => {
  return (
    <Dialog open={isOpen} handler={handler}>
      <DialogHeader>Intra in cont</DialogHeader>
      <DialogBody divider>
        <SignInDialogForm />
      </DialogBody>
    </Dialog>
  );
};

export default SignInDialog;
