import {
  Box,
  Button,
  Stack,
  Typography,
  InputAdornment,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Spinner from "../components/Loading/Spinner";
import FlexBox from "../components/FlexBox";
import MTextField from "../components/Input";
import UserService from "../services/userService";
import { setToken } from "../redux/slice/AuthSlice";
import MainLayout from "../components/layout/MainLayout";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    palette: { primary, secondary, text, grey },
  }: any = useTheme();
  const { user, token } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { mutate: register, isLoading } = useMutation(UserService.register, {
    onSuccess: (result) => {
      dispatch(setToken(result));
      toast("Đăng nhập thành công!", {
        icon: "👏",
      });
      router.push("/");
    },
    onError: (err: any) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeat: "",
    },
  });

  const customTextField = {
    // ".css-kobfq2-MuiInputBase-root-MuiOutlinedInput-root": {
    //   backgroundColor: primary[200],
    // },
    div: {
      backgroundColor: secondary.main,
    },
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  const handleRegister = (data: any) => {
    if (data.password !== data.repeat) {
      toast.error("Mật khẩu và nhập lại không khớp");
    }
    register({ username: data.username, password: data.password });
  };

  if (typeof user == "undefined") {
    return <Spinner />;
  }

  return (
    <MainLayout isSlider={false}>
      <FlexBox
        alignItems={"center"}
        justifyContent='center'
        minHeight={"90vh"}
        bgcolor={grey[900]}
      >
        <Box width={{ sm: 500, xs: "90%" }}>
          <Typography fontWeight={600} textAlign='center' mb={2} fontSize={20}>
            Chào mừng bạn đến với Tailieuthi.site
          </Typography>
          <Box
            sx={{
              bgcolor: secondary.main,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                bgcolor: primary[800],
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                color: "#fff",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                p: 1,
              }}
              textAlign='center'
            >
              Bạn đã có tài khoản?
              <Link href='/dang-nhap'>
                <Button variant='text' sx={{ color: "#fff" }}>
                  Đăng nhập ngay
                </Button>
              </Link>
            </Typography>
            <form onSubmit={handleSubmit(handleRegister)}>
              <Stack mt={2} px={5} py={3}>
                <MTextField
                  control={control}
                  error={errors}
                  label={"Tên đăng nhập"}
                  name={"username"}
                  rules={{
                    required: {
                      value: true,
                      message: "Bắt buộc",
                    },
                  }}
                  customSx={customTextField}
                  size={"medium"}
                />
                <MTextField
                  size={"medium"}
                  name='password'
                  control={control}
                  error={errors}
                  label='Mật khẩu'
                  type={showPassword ? "text" : "password"}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <IconButton
                          size='small'
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize='small' />
                          ) : (
                            <Visibility fontSize='small' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  rules={{
                    required: {
                      value: true,
                      message: "Bắt buộc",
                    },
                    minLength: {
                      value: 4,
                      message: "Không được dưới 4 kí tự",
                    },
                  }}
                  customSx={customTextField}
                />
                <MTextField
                  size={"medium"}
                  name='repeat'
                  control={control}
                  error={errors}
                  label='Nhập lại mật khẩu'
                  type={showPassword ? "text" : "password"}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <IconButton
                          size='small'
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize='small' />
                          ) : (
                            <Visibility fontSize='small' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  rules={{
                    required: {
                      value: true,
                      message: "Bắt buộc",
                    },
                    minLength: {
                      value: 4,
                      message: "Không được dưới 4 kí tự",
                    },
                  }}
                  customSx={customTextField}
                />
                <LoadingButton
                  loading={isLoading}
                  type='submit'
                  color='primary'
                  variant='contained'
                  startIcon={<VpnKeyIcon />}
                  onClick={handleSubmit(handleRegister)}
                >
                  Đăng ký
                </LoadingButton>
              </Stack>
            </form>
          </Box>
        </Box>
      </FlexBox>
    </MainLayout>
  );
};

export default Register;
