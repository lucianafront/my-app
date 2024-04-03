import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import WomanIcon from "@mui/icons-material/Woman";
import Man3Icon from "@mui/icons-material/Man3";

export default function BasicCard(props: any) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          marginTop: 20,
          marginLeft: 20,
          height: 300,
          fontSize: 30,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        {props.nome} {props.sexo === "M" ? <Man3Icon /> : <WomanIcon />} Idade:
        {props.idade}
      </Box>
    </ThemeProvider>
  );
}
