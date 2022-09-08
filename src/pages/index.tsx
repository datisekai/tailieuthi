import { Box, useTheme } from "@mui/material";
import MainLayout from "../components/layout/MainLayout";
import UserLayout from "../components/layout/UserLayout";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { increment, decrement } from "../redux/slice";

const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const {
    palette: { grey },
  } = useTheme();

  console.log(user);

  return (
    <MainLayout>
      <Box bgcolor={grey[900]} sx={{ minHeight: "100vh", pb: 10 }}>
        <Section1 title='Mới cập nhật' />
        <Section1 title='Top lượt xem' />
        <Section1 title='Top yêu thích' />
        <Section2 title='Đại học Sài Gòn' />
        <Section2 title='Đại học Sư Phạm' />
      </Box>
    </MainLayout>
  );
};

export default Home;
