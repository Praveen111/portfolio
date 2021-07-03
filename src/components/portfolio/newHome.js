import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import PortfolioPageImage from "../../assets/images/portfolio/PortfolioPageImage.png";
import facebookImg from "../../assets/images/portfolio/facebook.png";
import TwitterImg from "../../assets/images/portfolio/twitter.png";
import LinkedInImg from "../../assets/images/portfolio/linkedin.png";
import githubImg from "../../assets/images/portfolio/github.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import wavingHand from "../../assets/images/portfolio/waving-hand.png";

const useStyles = makeStyles((theme) => ({
  divStyle: {
    //    display:'flex',
    //    width:'auto',
    //    height:'100vh'
  },
  leftSide: {
    position: "absolute",
    left: "26%",
    top: "8%",
    width: "20vw",
    height: "400px",
    fontFamily: "'Pacifico', cursive",
  },
  rightSide: {
    width: "50%",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: "125vh",
      overflow: "hidden",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  effect: {
    position: "absolute",
    width: "10%",
    height: "100vh",
    // left: '950px',
    top: "0px",
    background:
      "linear-gradient(90deg, #BDD8F7 0%, rgba(189, 216, 247, 0) 93.58%)",
  },
  title: {
    position: "absolute",
    height: "52px",
    left: "8.19%",
    right: "56.11%",
    top: "calc(50% - 52px/2 - 134px)",
    color: "#8497B7",
    /* border: 1px solid #6984AE; */
    textShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    fontFamily: "Offside",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "50px",
    lineHeight: "63px",
    letterSpacing: "6px",
    ["@media (max-width:1356px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "40px",
    },
  },
  title2: {
    position: "absolute",
    height: "37px",
    left: "12.19%",
    right: "59.93%",
    top: "calc(50% - 37px/2 - 45.5px)",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "27px",
    lineHeight: "136.1%",
    color: "#8497B7",
    // border: '1px solid #6984AE',
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    // ['@media (max-width:1356px)']: { // eslint-disable-line no-useless-computed-key
    //     fontSize: '2px',
    //   }
  },
  title3: {
    position: "absolute",
    width: "50%",
    height: "131px",
    left: "10px",
    top: "calc(60% - 37px/2 - 45.5px)",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "17px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "1px",
    color: "#BD9B41",
    flexDirection: "column",
  },
  icons: {
    // position: 'absolute',
    width: "20vw",
    // display: 'flex',
    // left: '1vw',
    // top: '6vh',
    // right:'5vw',
    // justifyContent: 'center',
    // ['@media (min-width:2560px)']: { // eslint-disable-line no-useless-computed-key
    //     left: 'calc(22% - 37px/2 - 45.5px)',
    //   },
  },
  imgStyle: {
    width: "99.5vw",
    height: "99.5vh",
  },
  intro: {
    width: "15vw",
    border: "1px solid #E9C868",
    height: "15vh",
    borderRadius: "100px",
    background: " rgba(255, 255, 255, 0.2)",
    boxShadow: " 0px 4px 4px rgb(0 0 0 / 25%)",
    marginLeft: "2px",
  },
  textTitle: {
    display: "flex",
    justifyContent: "space-evenly",
    color: "#3C4C78",
    fontSize: "x-large",
  },
  role: {
    width: "15vw",
    border: "1px solid #E9C868",
    height: "20vh",
    borderRadius: "25px",
    background: " rgba(255, 255, 255, 0.2)",
    boxShadow: " 0px 4px 4px rgb(0 0 0 / 25%)",
    marginLeft: "2px",
    position: "relative",
    top: "10vh",
    letterSpacing: "0.02em",
    lineHeight: "6vh",
    color: "#3C4C78",
  },
  leftDown: {
    position: "absolute",
    left: "10%",
    bottom: "10vh",
    width: "20vw",
    height: "15vh",
    background: "#C6DCF8",
    backdropFilter: "blur(9px)",
    borderRadius: "25px",
    fontFamily: "'Pacifico', cursive",
  },
}));

const styles = {
  //   root: {
  //     backgroundColor: red[600],
  //     height: 500,
  //     width: 400
  //   },
  //   media: {
  //     backgroundColor: red[400]
  //   }
};

export default function PortfolioHome(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divStyle}>
        {/* <div className={classes.effect}></div> */}
        <img src={PortfolioPageImage} className={classes.imgStyle} />
      </div>
      <div className={classes.leftSide}>
        <div className={classes.intro}>
          <div className={classes.textTitle}>
            <img
              src={wavingHand}
              style={{ width: "60px", height: "60px", alignSelf: "center" }}
            />
            <h3>
              Hello, I am <br /> Praveen
            </h3>
          </div>
          <div
            style={{
              position: "relative",
              width: "20px",
              height: "20px",
              left: "14vw",
              // top: '1vh',
              background: "rgb(233, 200, 104)",
              borderRadius: "50px",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              width: "15px",
              height: "15px",
              left: "16vw",
              // top: '6vh',
              background: "rgb(233, 200, 104)",
              borderRadius: "50px",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              width: "10px",
              height: "10px",
              left: "18vw",
              // top: '7vh',
              background: "rgb(233, 200, 104)",
              borderRadius: "50px",
            }}
          ></div>
        </div>

        <div className={classes.role}>
          <h2>
            Front End Developer <br /> And <br /> UX Designer
          </h2>
        </div>
      </div>
      <div className={classes.leftDown}>
        <h3
          style={{
            color: "#FA5D3F",
            textAlign: "center",
            extDecoration: "underline",
          }}
        >
          Hire Me :
        </h3>
        <div className={classes.icons}>
          <Button
            onClick={() =>
              window.open("https://twitter.com/Praveen_Saboji", "_blank")
            }
          >
            <img src={TwitterImg} style={{ width: "50px", height: "50px" }} />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.facebook.com/pravee111", "_blank")
            }
          >
            <img src={facebookImg} style={{ width: "50px", height: "50px" }} />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/praveen-saboji-56b63678/",
                "_blank"
              )
            }
          >
            <img src={LinkedInImg} style={{ width: "50px", height: "50px" }} />
          </Button>
          <Button
            onClick={() =>
              window.open("https://github.com/Praveen111", "_blank")
            }
          >
            <img src={githubImg} style={{ width: "50px", height: "50px" }} />
          </Button>
        </div>
      </div>
    </>
  );
}
