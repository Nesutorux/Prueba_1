import React from "react";
import Grid from "@mui/material/Grid";
import "/src/view/css/styles.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";

export function Grafica_1() {
  return <Inicio />;
}
//Generacion y Estructura del Dash
function Inicio() {
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-graphics screen">
        <div className="fondo">
          <div className="barmenu">
            <Menus />
          </div>
          <ul>
            <Seccion />
            <div className="areatrabajo">
              <Areatrabajo />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
/*  
   Area generada en columnas para tener en una sola linea,
   el buscador, notificacion, mensajes, configuracion y perfil
*/
function Seccion() {
  return (
    <Grid container spacing={0} columns={5}>
      <Grid>
        <Buscador />
      </Grid>
      <Grid>
        <AccountNotification />
      </Grid>
      <Grid>
        <AccountMessage />
      </Grid>
      <Grid>
        <AccountProfile />
      </Grid>
    </Grid>
  );
}
//Seccion de Area de Trabajo
function Areatrabajo() {
  return <div className="tabla"></div>;
}
