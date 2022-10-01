import React from "react";
import Button from "@mui/material/Button";
import "/src/view/css/styles.css";
import logo from "/src/image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Dashinicio from "/src/view/pages/inicio.jsx";
import Proyecto from "/src/view/pages/proyecto.jsx";
import Seguimiento from "/src/view/pages/seguimiento.jsx";
import Grafica_1 from "/src/view/pages/grafica_1.jsx";
import Grafica_2 from "/src/view/pages/grafica_2.jsx";

export function Menus() {
  return (
    <Router>
      <img src={logo} alt="logo" className="logo" />
      <Switch>
        <Route exact path="./inicio" component={Dashinicio}>
          <VInicio />
        </Route>
        <Route path="./proyecto" component={Proyecto}>
          <VProyecto />
        </Route>
        <Route path="./seguimiento" component={Seguimiento}>
          <VSeguimiento />
        </Route>
        <Route path="./grafica_1" component={Grafica_1}>
          <VGrafica_1 />
        </Route>
        <Route path="./grafica_2" component={Grafica_2}>
          <VGrafica_2 />
        </Route>
      </Switch>
    </Router>
  );
}

function VInicio() {
  return (
    <Button color="secondary" className="btninicio" startIcon={<HomeIcon />}>
      Inicio
    </Button>
  );
}
function VProyecto() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<AssignmentIndIcon />}
    >
      Proyecto
    </Button>
  );
}
function VSeguimiento() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<AssignmentIndIcon />}
    >
      Seguimiento
    </Button>
  );
}
function VGrafica_1() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<LeaderboardIcon />}
    >
      Grafica 1
    </Button>
  );
}
function VGrafica_2() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<LeaderboardIcon />}
    >
      Grafica 2
    </Button>
  );
}
