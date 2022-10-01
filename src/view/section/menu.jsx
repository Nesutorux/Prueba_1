import React from "react";
import Button from "@mui/material/Button";
import "/src/view/css/styles.css";
import logo from "/src/image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export function Menus() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <VInicio />
      <VProyecto />
      <VSeguimiento />
      <VGrafica1 />
      <VGrafica2 />
    </div>
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
function VGrafica1() {
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
function VGrafica2() {
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
