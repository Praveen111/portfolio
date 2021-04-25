import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Button, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import { IconButton, CircularProgress } from "@material-ui/core";
import "./login.scss";
import axios from "axios";
import { Context } from "../globalContext/context";

const useStyles = makeStyles((theme) => ({
  margin1: {
    margin: theme.spacing(1),
    width: "250px",
    margin: "0 auto",
    paddingBottom: "30px",
  },
  margin2: {
    margin: theme.spacing(1),
    width: "250px",
    margin: "0 auto",
    paddingBottom: "30px",
  },
  divStyle: {
    width: "25%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    padding: "100px",
    border: "5px inset #1C00C8",
    borderRadius: "25px 25px 25px 25px",
    marginTop: "100px",
  },
}));

export default function LoginFormComponent(props) {
  const classes = useStyles();
  const [details, setDetails] = useState({
    name: "",
    password: "",
    show: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);
  let [isLogin, setIsLogin] = context.login;

  const handleClickShowPassword = () => {
    setDetails({ ...details, show: !details.show });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUser = () => {
    setIsLoading(true);
    let payload = {
      firstname: details.name,
      password1: details.password,
    };
    axios
      .post(
        "https://docs.lab.dev-rancher.tecnotree.com/usageAPI/signup",
        payload
      )
      .then((resp) => {
        if (resp.status === 200) {
          setIsLoading(false);
          props.history.push(`/dashboard`);
          setIsLogin(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={classes.divStyle} id="test">
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      <FormControl className={classes.margin1} id="test1">
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
          id="input-with-icon-adornment"
          //   startAdornment={
          //     <InputAdornment position="start">
          //       <AccountCircle />
          //     </InputAdornment>
          //   }
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </FormControl>

      <FormControl className={classes.margin2}>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment1"
          type={details.show ? "text" : "password"}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, password: e.target.value }))
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disabled={details.name === "" || details.password === ""}
              >
                {details.show ? (
                  <VisibilityRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        style={{ width: "100px", margin: "0 auto" }}
        disabled={details.name === "" || details.password === "" || isLoading}
        onClick={(e) => loginUser()}
      >
        {!isLoading ? (
          "Login"
        ) : (
          <CircularProgress
            color="secondary"
            style={{ width: "25px", height: "25px" }}
          />
        )}
      </Button>
    </div>
  );
}
