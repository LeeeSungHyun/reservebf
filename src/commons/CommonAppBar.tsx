import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CommonAppBar() {
  return (
    <AppBar position="fixed" elevation={0} color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textAlign: "left", color: "white" }}
        >
          예약 서비스
        </Typography>
        <ButtonGroup variant="text" color="inherit">
          <Button component={Link} to="/RoomInfo">
            Menu 1
          </Button>
          <Button>Menu 2</Button>
          <Button>Menu 3</Button>
          <Button
            component={Link}
            to="/SignIn"
            sx={{
              color: "white",
              borderColor: "white",
            }}
          >
            Login
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}

export default CommonAppBar;
