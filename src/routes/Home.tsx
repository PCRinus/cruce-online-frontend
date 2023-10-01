import CreateAccountDialog from '@@components/account/CreateAccountDialog';
import SignInDialog from '@@components/account/SignInDialog';
import usePlayerCount from '@@hooks/usePlayerCount';
import { Button, Typography } from '@material-tailwind/react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [openCreateAccountForm, setOpenCreateAccountForm] = useState(false);
  const [openSignInForm, setOpenSignInForm] = useState(false);
  const playerCount = usePlayerCount();

  const handlePlayNow = () => {
    setShouldFetch(true);
    navigate('/lobby');
  };

  const createAccountDialogHandler = () => {
    setOpenCreateAccountForm(!openCreateAccountForm);
  };

  const signInDialogHandler = () => {
    setOpenSignInForm(!openSignInForm);
  };

  return (
    <div className="flex flex-col justify-center gap-6 pt-12">
      <div>
        <Typography variant="h1">Cruce online</Typography>
        <Typography variant="lead">Jucatori online: {playerCount}</Typography>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          className="rounded-md bg-green-800 px-4 py-2 text-center text-base text-white"
          disabled={shouldFetch}
          onClick={handlePlayNow}
        >
          Joaca acum
        </Button>
        <div className="flex gap-2">
          <Button
            className="basis-1/2 rounded-md bg-blue-500 px-4 py-2 text-center"
            onClick={createAccountDialogHandler}
          >
            Creaza un cont
          </Button>

          <Button
            className="basis-1/2 rounded-md bg-blue-500 px-4 py-2 text-center"
            onClick={signInDialogHandler}
          >
            Intra in cont
          </Button>
        </div>

        <CreateAccountDialog
          isOpen={openCreateAccountForm}
          handler={createAccountDialogHandler}
        ></CreateAccountDialog>

        <SignInDialog isOpen={openSignInForm} handler={signInDialogHandler}></SignInDialog>
      </div>
    </div>
  );
};

export default Home;
