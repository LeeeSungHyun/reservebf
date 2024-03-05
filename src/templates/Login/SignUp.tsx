import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import OkModal from "../../commons/modals/OkModal";
import CommonAppBar from "../../commons/CommonAppBar";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp(props: {
  name: string;
  id: string;
  password: string;
  passwordConfirm: string;
  passwordsMatch: boolean;
  phoneNumber: string;
  affiliation: string;
  customAffiliation: string;
  modalOpen: boolean;
  modalMsg: string;
  onNameChange: any;
  onIdChange: any;
  onPasswordChange: any;
  onPasswordConfirmChange: any;
  onPhoneNumberChange: any;
  onAffiliationChange: any;
  onCustomAffiliationChange: any;
  handleSubmit: any;
  handleModalClose: any;
  idCheck: boolean;
  idCheckOnClick: any;
}) {
  const affiliations = [
    { name: "1교구", value: "1a" },
    { name: "2교구", value: "2a" },
    { name: "3교구", value: "3a" },
    { name: "청년", value: "st" },
    { name: "기타", value: "etc" },
  ];

  const {
    name,
    id,
    password,
    passwordConfirm,
    passwordsMatch,
    phoneNumber,
    affiliation,
    customAffiliation,
    modalOpen,
    modalMsg,
    onNameChange,
    onIdChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onPhoneNumberChange,
    onAffiliationChange,
    onCustomAffiliationChange,
    handleSubmit,
    handleModalClose,
    idCheck,
    idCheckOnClick,
  } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CommonAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="name"
                  onChange={onNameChange}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  name="id"
                  autoComplete="id"
                  onChange={onIdChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  color={idCheck ? "primary" : "error"} // idCheck 값에 따라 색상 변경
                  variant="contained"
                  onClick={idCheckOnClick}
                >
                  {idCheck ? "중복 확인 완료" : "중복확인 필요"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onPasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  onChange={onPasswordConfirmChange}
                  error={!passwordsMatch} // 일치하지 않을 때 에러 상태로 설정
                  helperText={
                    !passwordsMatch && "비밀번호가 일치하지 않습니다."
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="전화번호"
                  type="tel"
                  id="phoneNumber"
                  onChange={onPhoneNumberChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="affiliation-label">소속</InputLabel>
                  <Select
                    labelId="affiliation-label"
                    id="affiliation"
                    label="소속"
                    value={affiliation}
                    onChange={onAffiliationChange}
                  >
                    {affiliations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="customAffiliation"
                  label="(기타)"
                  id="customAffiliation"
                  onChange={onCustomAffiliationChange}
                  disabled={affiliation === "etc" ? false : true}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              가입하기
            </Button>
          </Box>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/SignIn" variant="body2">
                로그인화면으로 가기
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <OkModal
          open={modalOpen}
          onClose={handleModalClose}
          message={modalMsg}
        />
      </Container>
    </ThemeProvider>
  );
}
