import React, { FC } from "react";
import { ChildrenProps } from "../../models";

interface ModalProps extends ChildrenProps {
  name: string;
}

const Modal: FC<ModalProps> = ({ name, children }) => {
  return (
    <div className="w-[400px] max-w-full rounded-md bg-white p-5 shadow-md">
      <h1 className="text-center font-semibold text-lg mb-5">{name}</h1>
      {children}
    </div>
  );
};

export default Modal;
