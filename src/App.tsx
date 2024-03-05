import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInContainer from "./containers/LoginContainer/SignInContainer";
import SignUpContainer from "./containers/LoginContainer/SignUpContainer";
import MainContainer from "./containers/MainContainer";
import RoomTemplate from "./templates/RoomTemplate";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/back1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/SignIn" element={<SignInContainer />} />
            <Route path="/SignUp" element={<SignUpContainer />} />
            <Route path="/RoomInfo" element={<RoomTemplate />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
