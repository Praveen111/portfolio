import React, { useState, useContext, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Input, Button, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VisibilityOffRoundedIcon from "@material-ui/icons/VisibilityOffRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import { IconButton, CircularProgress } from "@material-ui/core";
import "./home.scss";
import axios from "axios";
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Context } from "../globalContext/context";
import { Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import { Transition } from 'react-transition-group';
// const Button = require('@material-ui/core/Button').default;

const useStyles = makeStyles((theme) => ({
//   margin1: {
//     margin: theme.spacing(1),
//     width: "250px",
//     margin: "0 auto",
//     paddingBottom: "30px",
//   },
//   margin2: {
//     margin: theme.spacing(1),
//     width: "250px",
//     margin: "0 auto",
//     paddingBottom: "30px",
//   },
//   divStyle: {
//     width: "25%",
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     padding: "100px",
//     border: "5px inset #1C00C8",
//     borderRadius: "25px 25px 25px 25px",
//     marginTop: "100px",
//   },
  headline : {
    width: '50%',
    margin: '0 auto',
    padding: '25px',
    lineHeight: '45px',
    background: 'linear-gradient(22deg, rgba(2,0,36,0.4514180672268907) 0%, rgba(183,29,98,0.7343312324929971) 45%, rgba(0,241,255,0.26094187675070024) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
},
item : {
    position: 'relative',
    display: 'none',
    float: 'left',
    width: '100%',
    marginRight: '-100%',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transition: 'transform .6s ease'
}
}));


const styles = {
  root: {
    backgroundColor: red[600],
    height: 500,
    width: 400
  },
  media: {
    backgroundColor: red[400]
  }
}

const StyledSlide = withStyles(styles)(Slide);

export default function HomeComponent(props) {
  const classes = useStyles();
  const [details, setDetails] = useState({
    name: "",
    password: "",
    show: false,
  });
  const [current,setCurrent] = useState(1);
  const [open,setOpen] =useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const context = useContext(Context);
  let [isLogin, setIsLogin] = context.login;

  const handleClickShowPassword = () => {
    setDetails({ ...details, show: !details.show });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // let items = document.querySelectorAll('.carousel-item')
    // console.log("ON LOAD",current,items,items[current].className);

    // setInterval(() => {
    //    items[current].className = 'carousel-item active carousel-item-end';
    //    items[current+1].className = "carousel-item active carousel-item-start";

       
    //    items[current].className = 'carousel-item';
    //    items[current+1].className = "carousel-item active";
    //    console.log("SET INT",current);
    //    setTimeout(() => {
    //    console.log("SET timeout",current);
    //    setCurrent((prev) => (prev === 3 ? 1 : prev+1))
    //    },500);
    // },5000)

    //for few seconds add .active.carousel-item-end to the current and add .active.carousel-item-start to the next and then switch to only active for the current div

  },[])


  return (
    <div className={classes.divStyle}>
      <Typography variant="h4" gutterBottom className={classes.headline}>
        Welcome to the NP Stores one shop stop for eye catchy silk threaded bangles stores for the girls who want to look more beautiful and get a feel of modern world women
      </Typography>

      {/* <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
  <div className="carousel-inner">
    {[1,2,3].map((key,i) => (<div key={i} className={`carousel-item ${current === key ? 'active' : ''}`}>
      <img src="..." className="d-block w-100" alt={key} />
    </div>))}
  </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div> */}


<div style={{ position: 'relative', width: '90%',margin:'0 auto', height: 500 }}>
  <Button onClick={() => setOpen(true)}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    open={open}
    onClose={() => setOpen(false)}
    onStart={() => setOpen(false)}
    style={{ position: 'relative' }}
  >

<Slide
  media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
  title='This is a very cool feature'
  subtitle='Just using this will blow your mind.'
/>
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div>

      {/* <Button
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
      </Button> */}
    </div>
  );
}
