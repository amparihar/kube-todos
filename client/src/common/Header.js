import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { UserContext } from "./UserContext";

const WrappedHeader = ({ history }) => {
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log('Header', user);
  // }, [user]);

  const activeStyle = { color: "orange" };

  const handleLogout = () => {
    setUser((user) => ({
      ...user,
      userName: "",
      password: "",
      isAuthenticated: false,
    }));
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          {/* <NavLink
            to="/character"
            exact
            activeStyle={activeStyle}
            className="nav-item nav-link"
          >
            Characters
          </NavLink>
          <NavLink
            to="/counter"
            activeStyle={activeStyle}
            className="nav-item nav-link"
          >
            Counter
          </NavLink>
          <NavLink
            to="/diffing"
            activeStyle={activeStyle}
            className="nav-item nav-link"
          >
            Diffing
          </NavLink>
          <NavLink
            to="/events"
            activeStyle={activeStyle}
            className="nav-item nav-link"
          >
            Events
          </NavLink> */}
          <NavLink
            to="/todos"
            activeStyle={activeStyle}
            className="nav-item nav-link"
          >
            To Do List
          </NavLink>
        </div>
      </div>

      {user.isAuthenticated && (
        <span className="navbar-text">
          <button
            onClick={handleLogout}
            className="link-button"
            style={{ color: "orange" }}
          >
            Logout {user.userName}
          </button>
        </span>
      )}
    </nav>
  );
};

export default withRouter(WrappedHeader);
