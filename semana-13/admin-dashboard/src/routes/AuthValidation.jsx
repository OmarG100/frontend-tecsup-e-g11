import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthValidation = () => {

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user]);

  return (<Outlet />);
}

export default AuthValidation;