import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFunction from "./useFunction";
import FormHelperText from "@mui/material/FormHelperText";
import { errorMsg } from "../lib/utils";
import { useCreateUserAccount } from "../lib/react-query/queryMutations";

const defaultTheme = createTheme();

export default function SignUp() {
  const formRef = React.useRef();

//useState
  const [signupValidation, validationMsg] = useFunction();
  const { mutateAsync: createUserAccount,isSuccess} = useCreateUserAccount(); 


//   function handles

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
  
    try {
        const signupData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
          };
          console.log("sign",signupData)
      signupValidation(signupData);
      
      createUserAccount(signupData).
      then((data)=>console.log("data-->",data))
     
    

      
    } catch (error) {


    }
    console.log("isSuccess-->",isSuccess) 
  };

  return (
    <ThemeProvider theme={defaultTheme}>

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
         
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            ref={formRef}
          >
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
                {errorMsg( validationMsg ? validationMsg["firstName"] : "")}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
                {errorMsg( validationMsg ? validationMsg["lastName"] : "")}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                 {errorMsg( validationMsg ? validationMsg["email"] : "")}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {errorMsg( validationMsg ? validationMsg["password"] : "")}
              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
              
            </Grid>

          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
