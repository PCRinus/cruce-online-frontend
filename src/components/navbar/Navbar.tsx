import { Typography } from '@material-tailwind/react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HamburgerButtonProps {
  isMenuVisible: boolean;
  setIsMenuVisible: (value: boolean) => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ isMenuVisible, setIsMenuVisible }: HamburgerButtonProps) => {
  return (
    <div className="group flex flex-col justify-center gap-2" onClick={() => setIsMenuVisible(!isMenuVisible)}>
      <span className="block h-0.5 w-8 bg-gray-600"></span>
      <span className="block h-0.5 w-8 bg-gray-600"></span>
      <span className="block h-0.5 w-8 bg-gray-600 group-hover:w-5"></span>
    </div>
  );
};

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between bg-gray-200 p-4 align-middle">
        <Typography variant="lead" onClick={() => navigate('/')}>
          ✝️ Cruce Online
        </Typography>
        <HamburgerButton isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      </div>

      {isMenuVisible && (
        <div className="flex flex-col gap-2 bg-gray-100 px-4 py-3">
          <Typography variant="paragraph">🏆 Leaderboard</Typography>
          <Typography variant="paragraph">🏆 Leaderboard</Typography>
        </div>
      )}
    </>
  );
};

export default Navbar;
