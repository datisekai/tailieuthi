import React, { FC } from "react";
import { useForm } from "react-hook-form";
import MTextField from "../Input";

interface UserProps {
  status: "add" | "edit";
}

const User: FC<UserProps> = ({ status }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MTextField
        name="username"
        control={control}
        error={errors}
        label="Tên người dùng"
        rules={{
          required: {
            value: true,
            message: "Bắt buộc",
          },
        }}
      />
      <MTextField
        name="password"
        control={control}
        error={errors}
        label="Mật khẩu"
        rules={{
          required: {
            value: true,
            message: "Bắt buộc",
          },
        }}
      />

      <button className="w-full bg-blue-500 text-white text-sm rounded-md py-2">
        {status === "add" ? "Thêm người dùng" : "Sửa người dùng"}
      </button>
    </form>
  );
};

export default User;
