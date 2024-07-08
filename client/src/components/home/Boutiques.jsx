import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Box, styled, Typography } from '@mui/material';

import { boutiquesData } from '../../constants/Data';

const StyledTypography = styled(Typography)({
  textAlign: 'center',
  fontSize: 25,
});

const Container = styled(Box)`
  background-color: #ccc;
  padding: 20px;
`;

const BoutiqueContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px;
`;

const Image = styled('img')({
  objectFit: 'contain',
  padding: 20,
  textAlign: 'center',
  height: 300,
  width: 300,
});

const ImageContainer = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

function Boutiques() {
  const [products, setProducts] = useState([]);
  const handleClick = async (collection) => {
    console.log('Button clicked:', collection);
    try {
      const url = `http://localhost:8000/api/boutiques/${collection}`;
      const response = await axios.get(url);
      console.log('Response data:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <StyledTypography>PREMIUM BOUTIQUES</StyledTypography>
      <BoutiqueContainer>
        {boutiquesData.map((data, index) => {
          return (
            <ImageContainer key={index}>
              <Image src={data.url} alt="collection" />
              <Typography>{data.text}</Typography>
              <button onClick={() => handleClick(data.text)}>Get Products</button>
            </ImageContainer>
          );
        })}
      </BoutiqueContainer>
    </Container>
  );
}

export { Boutiques };