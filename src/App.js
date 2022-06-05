import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import Navbar from "./components/Navbar";

function App() {
  const darkTheme = createTheme({
    palete: {
      mode: dark,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
