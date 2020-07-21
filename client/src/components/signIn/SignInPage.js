import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { authLogin } from "../../api/authApi";
import { UserContext } from "../../common";

const SignInPage = ({ location }) => {
  const { user, setUser } = useContext(UserContext);
  const { referrer } = location.state || { referrer: "/todos" };

  const handleOnChange = (event) => {
    const { target = {} } = event || {};
    const { name = "", value = "" } = target || {};
    setUser((user) => ({ ...user, [name]: value.trim() }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    (async () => {
      const auth = await authLogin(user.userName, user.password);
      setUser((user) => ({ ...user, isAuthenticated: auth.isAuthenticated }));
    })();
  };

  // useEffect(() => {
  //   console.log(user)
  // }, [user, setUser])

  return (
    <React.Fragment>
      {user.isAuthenticated && <Redirect to={referrer} />}
      <h3>Sign In</h3>
      <form onSubmit={handleLogin}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                value={user.userName}
                onChange={handleOnChange}
                name="userName"
                className="form-control"
                placeholder="User Name"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={user.password}
                onChange={handleOnChange}
                name="password"
                className="form-control"
                placeholder="Password"
                autoComplete="off"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

// export default () => {
//   return (
//     <UserStateProvider>
//       <LoginPage />
//     </UserStateProvider>
//   );
// };

export default SignInPage;
