import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { setToken, setUser } from "../../redux/slice/AuthSlice";
import UserService from "../../services/userService";

const AuthLayout: FC<ChildrenProps> = ({ children }) => {
  const { user, token } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getInformation = async () => {
      const result = await UserService.getMyInformation();
      dispatch(setUser(result));
    };
    if (localStorage && localStorage.getItem("token")) {
      dispatch(setToken(localStorage.getItem("token")));
      getInformation();
    } else {
      dispatch(setUser(null));
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthLayout;