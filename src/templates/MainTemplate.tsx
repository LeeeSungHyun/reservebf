import React, { ReactNode } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  ButtonGroup,
  CardMedia,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

interface MainTemplateProps {
  children: ReactNode;
  testParams: number;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  testParams,
}) => {
  return (
    <Box
      component="main"
      style={{ padding: 0, height: "100vh", overflow: "hidden" }}
    >
      {/* Header */}
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            예약 서비스
          </Typography>
          <ButtonGroup color="inherit">
            <Button>Menu 1</Button>
            <Button>Menu 2</Button>
            <Button>Menu 3</Button>
            <Button component={Link} to="/SignIn">
              Login
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        {/* Main Content */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          >
            {/* 이미지는 여기에 넣으세요 */}
            <CardMedia
              component="img"
              alt="Main Image"
              height="auto"
              // image="/images/bfchurch2.jpg"
            />
          </Paper>
        </Grid>

        {/* Test Parameter */}
        <Grid item xs={12}>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "20px" }}
          >
            Test Parameter: {testParams}
          </Typography>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 2, mt: 4 }}>
        <Typography variant="subtitle1" align="center">
          © 2024 SH & DJ
        </Typography>
      </Box>
    </Box>
  );
};

export default MainTemplate;
