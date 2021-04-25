import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./style.scss";
import { Breadcrumbs, Divider } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router";
import { Context } from "../globalContext/context";

const useStyles = makeStyles({
  alignCenter: {
    "& > *": {
      justifyContent: "center",
      padding: "10px",
      color: "azure",
      //   textDecoration: 'underline',
      margin: "0 auto",
      width: "94%",
      padding: "11px",
      display: "flex",
      justifyContent: "flex-start",
      background: "rgb(2,0,36)",
      background:
        "linear-gradient(87deg, rgba(2,0,36,1) 0%, rgba(28,0,200,1) 0%, rgba(28,0,201,1) 100%)",
    },
    "& > * > *": {
      position: "relative",
      left: "5%",
    },
    "& > *:nth-child(2)": {
      textDecoration: "none !important",
    },
    "& > * > * :hover": {
      cursor: "pointer",
      color: "#1C00C8",
      textDecoration: "underline",
      background: "#e0e0e0",
      borderRadius: "25px",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    "& > * > * > *": {
      paddingRight: "8px",
      paddingLeft: "8px",
    },
  },
  active: {
    cursor: "pointer",
    color: "#1C00C8",
    textDecoration: "underline",
    background: "#e0e0e0",
    borderRadius: "25px",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
});

export default withRouter(function SimpleBreadcrumbs(props) {
  const context = useContext(Context);
  const [current, setCurrent] = useState(props.items.length - 1);
  const [isLogin, setIsLogin] = context.login;
  const classes = useStyles();
  let items = props.items;

  function handleClick(event, route, context, index) {
    event.preventDefault();
    if (current !== index) {
      setCurrent(index);
      context.route.history.push(route);
    }
  }

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator="/"
      className={classes.alignCenter}
    >
      {items.map((item, i) => (
        <Link
          color="inherit"
          className={current === i ? classes.active : ""}
          onClick={(e) =>
            handleClick(e, isLogin ? item.route : "/", context, i)
          }
        >
          {item.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
});
