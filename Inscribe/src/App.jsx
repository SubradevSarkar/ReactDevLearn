import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import { Header, Footer } from "./components";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return !isLoading ? (
    <div>
      <div>
        <Header />
        <h4>TODO:</h4>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
