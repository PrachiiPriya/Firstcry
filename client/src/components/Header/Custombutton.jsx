import React from 'react'
import { Box,Button, Typography,styled} from '@mui/material';
import {LocationOn} from '@mui/icons-material';
import {ShoppingCart} from '@mui/icons-material';


const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content:center;
`;

const Wrapper=styled(Box)`
display:flex;
margin: 0 3% 0% auto;
& > button{
margin-left:40px;
margin-right:40px;
}
cursor: pointer;
`;

const LoginButton=styled(Button)`
background-color:#FFD7BE;
marginBottom:8;
`;
export default function Custombutton() {
  return (
    <Container>
      <Box sx={{ width: 20 }}></Box>
    <Wrapper>
      <Wrapper>
        <LocationOn/>
        <Typography>Select location</Typography>
      </Wrapper>
      <Typography style={{marginBottom:8}}>Schools and Preschools</Typography>
      <Typography style={{marginBottom:8, marginTop:10}}>Support</Typography>
      <LoginButton variant='contained'aria-placeholder='Login'>Login/Register</LoginButton>
      <Wrapper>
        <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
        </Container>
      </Wrapper>
    </Wrapper>
    </Container>
  )
}
