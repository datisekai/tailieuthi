import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { setUser } from "../../redux/slice/AuthSlice";
import UserService from "../../services/userService";
import Spinner from "../Loading/Spinner";

const UserLayout: FC<ChildrenProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state.Auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return <Spinner />;
  }

  return <div>{children}</div>;
};

export default UserLayout;
