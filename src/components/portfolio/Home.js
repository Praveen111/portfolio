import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import profileImage from '../../assets/images/portfolio/profileImage.jpg';
import facebookImg from '../../assets/images/portfolio/facebook.png';
import TwitterImg from '../../assets/images/portfolio/twitter.png';
import LinkedInImg from '../../assets/images/portfolio/linkedin.png';
import githubImg from '../../assets/images/portfolio/github.png';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    divStyle : {
       display:'flex',
       width:'100%',
       height:'100vh'
    },
    leftSide:{
      width:'50%',
    //   border:'1px solid',
    //   position: 'absolute',
      height: '100vh',
      background: 'linear-gradient(275.72deg, #BDD8F7 4.55%, rgba(189, 216, 247, 0) 95.52%)',
    },
    rightSide : {
        width:'50%',
        overflow:'hidden',
        "& > img" : {
            width: '100%',
            height: '125vh',
            overflow:'hidden',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    },
    effect:{
        position: 'absolute',
        width: '10%',
        height: '100vh',
        // left: '950px',
        top: '0px',
  background: 'linear-gradient(90deg, #BDD8F7 0%, rgba(189, 216, 247, 0) 93.58%)'
    },
    title : {
        position: 'absolute',
    height: '52px',
    left: '8.19%',
    right: '56.11%',
    top: 'calc(50% - 52px/2 - 134px)',
    color: '#8497B7',
    /* border: 1px solid #6984AE; */
    textShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
    fontFamily: 'Offside',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '50px',
    lineHeight: '63px',
    letterSpacing: '6px',
    ['@media (max-width:1356px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '40px',
      }
    },
    title2:{
        position: 'absolute',
        height: '37px',
        left: '12.19%',
        right: '59.93%',
        top: 'calc(50% - 37px/2 - 45.5px)',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '27px',
        lineHeight: '136.1%',
        color: '#8497B7',
        // border: '1px solid #6984AE',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // ['@media (max-width:1356px)']: { // eslint-disable-line no-useless-computed-key
        //     fontSize: '2px',
        //   }
    },
    title3 : {
        position: 'absolute',
        width: '50%',
        height: '131px',
        left: '10px',
        top: 'calc(60% - 37px/2 - 45.5px)',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '17px',
        lineHeight: '29px',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '1px',
        color: '#BD9B41',
        flexDirection: 'column',
    },
    icons : {
        position: 'absolute',
        width: '350px',
        display: 'flex',
        left: 'calc(18% - 37px/2 - 45.5px)',
        top: 'calc(75% - 37px/2 - 45.5px)',
        justifyContent: 'space-evenly',
        ['@media (min-width:2560px)']: { // eslint-disable-line no-useless-computed-key
            left: 'calc(22% - 37px/2 - 45.5px)',
          }
    }
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
    }
    
    
    export default function PortfolioHome(props) {
      const classes = useStyles();
    
    
      return (
        <div className={classes.divStyle}>
            {/* <Typography variant="h1" component="h2" gutterBottom>
              h1. Heading
            </Typography> */}
            <div className={classes.leftSide}>
                <div>
                <Typography variant="h2" gutterBottom className={classes.title}>
                    Praveen Saboji
                </Typography>

                <Typography variant="h3" gutterBottom className={classes.title2}>
                   Front End Developer and UX Designer
                </Typography>
                <div className={classes.title3}>
                    <div>Skillsets : HTML5,CSS3, Javascript, ES6, TypeScript.</div>
                    <div> Frameworks/ Libraries : Angular 2+, ReactJS, React-Material-UI.</div>
                    <div> Web design tool : Figma</div>
                </div>
                <div className={classes.icons}>
                    <Button onClick={() => window.open("https://twitter.com/Praveen_Saboji",'_blank')}><img src={TwitterImg} style={{width:'50px',height:'50px'}} /></Button>
                    <Button onClick={() => window.open("https://www.facebook.com/pravee111",'_blank')}><img src={facebookImg} style={{width:'50px',height:'50px'}} /></Button>
                    <Button onClick={() => window.open("https://www.linkedin.com/in/praveen-saboji-56b63678/",'_blank')}><img src={LinkedInImg} style={{width:'50px',height:'50px'}} /></Button>
                    <Button  onClick={() => window.open("https://github.com/Praveen111",'_blank')}><img src={githubImg} style={{width:'50px',height:'50px'}} /></Button>
                </div>
                </div>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.effect}></div>
                <img src={profileImage} />
                </div>
        </div>
      );
    }
    