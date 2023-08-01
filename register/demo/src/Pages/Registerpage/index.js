import  React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Registerpage(){
  const[userData,setUserData]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  const handleChange=({target:{name,value}})=>{
    let updateData={...userData}
    updateData[name]=value;
    setUserData(updateData)
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   if(userData.password===userData.confirmpassword){
    alert("Registered successfully")
   } else{
    alert("Passwords must match!");
   }
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <Box>
           <Box
      sx={{ width: 500, maxWidth: '100%',margin: "30px",marginLeft: "400px",type:"name"}}>
       <TextField fullWidth label="Name" id="fullWidth" onChange={handleChange} name="name"/>
        </Box>
        <Box
      sx={{ width: 500, maxWidth: '100%',margin: "30px",marginLeft: "400px",type:"email"}}>
       <TextField fullWidth label="email" id="fullWidth" onChange={handleChange} name="email" />
        </Box>
        <FormControl sx={{ m: 1, width: '58ch',marginRight:'70px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onChange={handleChange}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password"
          />
        </FormControl>      
        <Box>
        <FormControl sx={{ m: 1, width: '58ch',marginRight:'70px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirmpassword</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onChange={handleChange}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="confirmpassword"
          />
        </FormControl> 
        </Box>
        <Box textAlign="Left" marginLeft="400px"> 
        <Checkbox {...label} defaultChecked />
        <Typography variant='caption' color="black" gutterBottom>
          Accept all terms and conditions
        </Typography>
        </Box>
        <Button variant="contained" type="submit" sx={{marginLeft:"300px"}}>Register</Button>
        </Box>
        </form>
         </>
        
    )
} 