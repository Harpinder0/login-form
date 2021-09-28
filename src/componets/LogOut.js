import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const LogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <h1>hello, welcome to my page {user.name}</h1>
      <button onClick={(e) => handleLogout(e)}>Log Out</button>
    </div>
  );
};

export default LogOut;
