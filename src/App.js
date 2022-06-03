import { Button, ThemeProvider } from "@material-ui/core";
import Navbar from "./componentes/navbar";
import "./styles.css";
import theme from "./tamaConfig";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Button variant="contained" color="primary" size="large">
            boton1
          </Button>
          <Button variant="contained" color="secondary" size="large">
            boton2
          </Button>
        </Navbar>
      </ThemeProvider>
    </div>
  );
}
