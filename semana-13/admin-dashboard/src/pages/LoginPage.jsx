import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage: {user ? 'Online' : 'Offline'}</h1>
      <button onClick={() => { setUser(true) }}>Logear</button>
      <button onClick={() => { setUser(false) }}>Logout</button>
    </>
  );
};

export default LoginPage;