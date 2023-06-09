import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useSellersignupMutation}from "../services/appApi";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link1 from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Alert} from 'react-bootstrap'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


//Seller Signup
//IT21013300


function Copyright(props) {
    return (
      
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Herbal Medics
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();




function SellerSignup() {
    const[SellerID,setSellerID] =useState('');
    const[ShopName,setShopName] =useState('');
    const[name,setName] =useState('');
    const[Address,setAddress] =useState('');
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    const[sellersignup,{error,isLoading,isError}] = useSellersignupMutation();


function handleSignup(e) {
        e.preventDefault();
        sellersignup({ SellerID, ShopName, name, Address, email, password });
    }
console.log(email)

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {isError && <Alert variant="danger">{error.data}</Alert>}    
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
               autoComplete="given-name"
               name="SellerID"
               required onChange={(e) => setSellerID(e.target.value)}
               fullWidth
               id="tName"
               label="SellerID"
               autoFocus
               value={SellerID} 
             
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
               autoComplete="given-name"
               name="ShopName"
               required onChange={(e) => setShopName(e.target.value)}
               fullWidth
               id="tName"
               label="ShopName"
               autoFocus
               value={ShopName} 
             
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
               autoComplete="given-name"
               name="Seller Name"
               required onChange={(e) => setName(e.target.value)}
               fullWidth
               id="tName"
               label="Seller Name"
               autoFocus
               value={name} 
             
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
               autoComplete="given-name"
               name="Address"
               required onChange={(e) => setAddress(e.target.value)}
               fullWidth
               id="tName"
               label="Address"
               autoFocus
               value={Address} 
             
              />
              </Grid>
            <Grid item xs={12}>
              <TextField
                 value={email}  
                required onChange={(e) => setEmail(e.target.value)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={password}
                required onChange={(e) => setPassword(e.target.value)}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit" disabled={isLoading}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link1 href="/Signin" variant="body2">
                Already have an account? Sign in
              </Link1>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  );
}

export default SellerSignup
