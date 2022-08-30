import { useTheme } from "@mui/material";
import UserLayout from "../components/layout/UserLayout";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { increment, decrement } from "../redux/slice";

const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const theme = useTheme();

  console.log(user);

  return (
    <UserLayout>
      <div className='p-10'>
        <p>{value}</p>

        <div className='flex gap-4'>
          <button
            className='bg-blue-500 p-2 mt-4 rounded-md text-white'
            onClick={() => dispatch(increment())}
          >
            Tăng lên
          </button>
          <button
            className='bg-blue-500 p-2 mt-4 rounded-md text-white'
            onClick={() => dispatch(decrement())}
          >
            Giảm xuống
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default Home;
