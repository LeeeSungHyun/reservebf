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
import CommonAppBar from "../commons/CommonAppBar";

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
      <CommonAppBar />
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
