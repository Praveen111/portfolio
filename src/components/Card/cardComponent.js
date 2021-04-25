import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Context } from "../globalContext/context";
import {Fade,Grow} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    "& :hover": {
      cursor: "pointer",
    },
    marginRight: "24px",
    marginTop: "24px",
    width: "225px",
    height: "200px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textTransform: "capitalize",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { title, path, desc, icon, style } = props;
  const context = useContext(Context);

  const goTo = () => {
    context.route.history.push(path);
  };

  return (
    <Grow in={true}>
    <Card className={classes.root}>
      <Button
        onClick={goTo}
        style={{ width: "225px", height: "200px", border: "1px solid #dedede" }}
      >
        <CardContent>
          <img
            src={icon}
            alt={desc}
            style={{
              height: '135px',
              width: '160px',
              paddingTop: '40px'
              // marginTop:'10px'
              // ...style,
            }}
          />
          <Typography
            variant="h6"
            component="h2"
            style={{ textTransform: "capitalize" }}
          >
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {desc}
          </Typography>
        </CardContent>
      </Button>
    </Card>
    </Grow>
  );
}
