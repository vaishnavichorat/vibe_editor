"use client";

import { signOut } from "next-auth/react";
import { LogoutButtonProps } from "../types";

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login", // redirect after logout
    });
  };

  return (
    <span className="cursor-pointer" onClick={onLogout}>
      {children}
    </span>
  );
};

export default LogoutButton;
