import React, { Children, useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import UIcon from "../../assets/images/users-cog-solid.svg";
import Rocket from "../../assets/images/rocket.svg";
import EventNewIcon from "../../assets/images/event.svg";
import CardComponent from "../Card/cardComponent";

import Design1 from '../../assets/images/bangle designs/Design1.jpeg';
import Design2 from '../../assets/images/bangle designs/Design2.jpeg'
import Design3 from '../../assets/images/bangle designs/Design3.jpeg'
import {
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import axios from "axios";
import {Context} from "../globalContext/context";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  table: {
    width: "95%",
    margin: "0 auto",
    paddingTop: "50px",
  },
  center: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [values, setValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recent, setRecent] = useState("Usage Details");
  const context = useContext(Context);
  const [state, setState] = context.default;
  // C:\Users\prave\OneDrive\Desktop\personal project\material-ui\src\assets\images\bangle designs\Design1.jpeg
  let cardDetails = [
    {
      name: "Design 1",
      desc: "Design 1",
      // path: "/test1",
      icon: Design1,
      style: {},
    },

    {
      name: "Design 2",
      desc: "Design 2",
      // path: "/test2",
      icon: Design2,
      style: {
        marginTop: "25px",
      },
    },

    {
      name: "Test 3",
      desc: "Test Description 2",
      // path: "/test2",
      icon: Design3,
      style: {
        marginTop: "25px",
      },
    },
  ];

  useEffect(() => {
    // setIsLoading(true);
    // let payload = {
    //   searchValue: "",
    //   requestType: 1001,
    //   start: 0,
    //   number: 100,
    // };
    // axios
    //   .post("http://localhost:8888/usageAPI/usageDetails", payload)
    //   .then((resp) => {
    //     console.log("resp", resp.data.msg.contentJson);
    //     setValues(resp.data.msg.contentJson);
    //     getMasterData();
    //   })
    //   .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    if (recent === "Event Details") {
      // setIsLoading(true);
      // let payload = {
      //   searchValue: "",
      //   requestType: 4,
      //   start: 0,
      //   number: 10,
      // };
      // axios
      //   .post(
      //     "https://docs.lab.dev-rancher.tecnotree.com/usageAPI/eventDetails",
      //     payload
      //   )
      //   .then((resp) => {
      //     setValues(resp.data.msg.contentJson);
      //     setIsLoading(false);
      //   })
      //   .catch((err) => console.log("error", err));
    } else {
      // setIsLoading(true);
      // let payload = {
      //   searchValue: "",
      //   requestType: 1001,
      //   start: 0,
      //   number: 10,
      // };
      // axios
      //   .post("http://localhost:8888/usageAPI/usageDetails", payload)
      //   .then((resp) => {
      //     setValues(resp.data.msg.contentJson);
      //     setIsLoading(false);
      //   })
      //   .catch((err) => console.log("error", err));
    }
  }, [recent]);

  const onChange = (value) => {
    setRecent(value);
  };

  async function getMasterData() {
    // context
    //   .getMasterData()
    //   .then((resp) => {
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });
  }

  return (
    <>
      {!isLoading ? (
        <div
          style={{
            background: "rgb(63 81 181 / 17%)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div className={classes.root}>
            {Children.toArray(
              cardDetails.map((value) => (
                <CardComponent
                  title={value.name}
                  path={value.path}
                  desc={value.desc}
                  icon={value.icon}
                  style={value.style}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <CircularProgress color="inherit" className={classes.center} />
      )}
    </>
  );
}
