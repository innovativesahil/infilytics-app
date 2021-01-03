import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions";

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const { isLoggingOut, logoutError } = useSelector(state => state.auth);
  return (
    <div className="container">
      <nav class="navbar navbar-dark bg-dark">
        <button className="btn btn-danger btn-sm" onClick={handleLogout}>
          Logout
        </button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </nav>
    </div>
  );
}
