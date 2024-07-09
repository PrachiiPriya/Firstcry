import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import { LocationOn, ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button {
    margin-left: 40px;
    margin-right: 40px;
  }
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  background-color: #FFD7BE;
  margin-bottom: 8;
`;

const Custombutton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Box sx={{ width: 20 }}></Box>
      <Wrapper>
        <Wrapper>
          <LocationOn />
          <Typography>Select location</Typography>
        </Wrapper>
        <Typography style={{ marginBottom: 8 }}>Schools and Preschools</Typography>
        <Typography style={{ marginBottom: 8, marginTop: 10 }}>Support</Typography>
        <LoginButton variant='contained' aria-placeholder='Login' onClick={handleClick}>
          Login/Register
        </LoginButton>
        <Wrapper>
          <Container>
            <ShoppingCart />
            <Typography>Cart</Typography>
          </Container>
        </Wrapper>
      </Wrapper>
<<<<<<< HEAD
=======
      <Typography style={{marginBottom:8}}>Schools and Preschools</Typography>
      <Typography style={{marginBottom:8, marginTop:10}}>Support</Typography>
      <LoginButton variant='contained'>Login/Register</LoginButton>
      <Wrapper>
        <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
        </Container>
      </Wrapper>
    </Wrapper>
>>>>>>> origin/master
    </Container>
  );
};

export default Custombutton;
