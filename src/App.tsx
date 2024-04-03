import React from "react";
import Container from "@mui/material/Container";
import "./App.css";
import { CssBaseline } from "@mui/material";
import BasicCard from "./components/BasicCard";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <BasicCard nome="Camila" sexo="F" idade="35" />
        <BasicCard nome="Pedro" sexo="M" idade="29" />
      </Container>
    </React.Fragment>
  );
}

export default App;
