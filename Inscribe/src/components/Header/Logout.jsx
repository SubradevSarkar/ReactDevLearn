import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { Button } from "../index.js";

function Logout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Button
      className=" inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
}

export default Logout;
