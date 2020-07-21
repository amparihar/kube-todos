import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Card, CardContent, Typography } from "@material-ui/core";

const SignUpPage = (props) => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Already have an account.{" "}
            <Link to={`${props.match.url}`}>Sign In</Link>
          </Typography>
          <Typography>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="username"
                  name="username"
                  label="User Name"
                  required
                />
              </div>
              <div>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SignUpPage;
