import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpContainer from "./containers/LoginContainer/SignUpContainer";
import MainContainer from "./containers/MainContainer";
import SignIn from "./templates/Login/SideIn";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        <Router>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUpContainer />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
