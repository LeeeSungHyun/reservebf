import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface MainTemplateProps {
  children: React.ReactNode;
  testParams: number;
}

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  testParams,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            예약 서비스
          </Typography>
          <ButtonGroup variant="text" color="inherit">
            <Button>Menu 1</Button>
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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              {/* Content Here */}
              {children}
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mt={2}
              >
                Test Parameter: {testParams}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              {/* Content Here */}
              {children}
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mt={2}
              >
                Test Parameter: {testParams}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              {/* Content Here */}
              {children}
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mt={2}
              >
                Test Parameter: {testParams}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", py: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="subtitle1" align="center">
            © 2024 SH & DJ
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default MainTemplate;
