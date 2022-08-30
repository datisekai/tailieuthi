import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { setUser } from "../../redux/slice/AuthSlice";
import UserService from "../../services/userService";

const UserLayout: FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default UserLayout;
