import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar/AppBar";
import { loadCSS } from "fg-loadcss";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/login";
import { GlobalProvider } from "../src/components/globalContext/context";
import { withRouter } from "react-router";
import Dashboard from "../src/components/Dashboard/Dashboard";
import HomeComponent from "../src/components/Home/Home";
import PortfolioHome from "../src/components/portfolio/Home";
import PortfolioHome1 from "../src/components/portfolio/newHome";
import axios from "axios";
import "./App.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
}));

function App(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [values, setValues] = useState(null);
  console.log("Props", values);

  const classes = useStyles();

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    if (!isLogin) {
      props.history.push("/");
    } else {
      props.history.push("/");
    }
    getMasterData();
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  async function getMasterData() {}

  return (
    <GlobalProvider
      value={{
        login: [isLogin, setIsLogin],
        route: { ...props },
        default: [values, setValues],
        getMasterData: getMasterData,
      }}
    >
      <div className="App">
        {/* {isLogin && <AppBar />} */}
        <Switch>
          {/* <Route  path="/login" exact render={() => (<Login {...props} />)} /> */}
          {/* <Route  path="/dashboard" exact render={() => (<Dashboard {...props} />)} /> */}
          {/* <Route  path="/" exact render={() => (<HomeComponent {...props}/>)} /> */}
          {/* <Route  path="/test2" exact render={() => (<>Test 2</>)} /> */}
          <Route path="/" exact render={() => <PortfolioHome1 {...props} />} />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default withRouter(App);
