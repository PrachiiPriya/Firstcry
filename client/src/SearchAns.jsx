import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Button, styled, Typography } from '@mui/material';

const Container = styled(Box)`
  background-color: #ccc;
  padding: 20px;
`;

const ProductContainer = styled(Box)`
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

const ProductDetail=styled('Button')({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  margin:10
})

function SearchAns() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/boutiques/search/${query}`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: 'center' }}>Search Results for: {query}</Typography>
      <ProductContainer>
      {products.map((product, index) => (
          <ProductDetail>
          <ImageContainer key={index}>
            <Image src={product.url} alt={product.title} />
            <Typography>{product.title}</Typography>
            <Typography>{product.price}</Typography>
          </ImageContainer>
          <ImageContainer>
            <Button>Add to Cart</Button>
            <Typography>{`Category: ${product.category}`}</Typography>
            <Typography>{`Description: ${product.description}`}</Typography>
            <Typography>{`Discount: ${product.discount}`}</Typography>
            <Typography>{`Collection: ${product.collection}`}</Typography>
            <Typography>{`Quantity: ${product.quantity}`}</Typography>
          </ImageContainer>
          </ProductDetail>
        ))}
      </ProductContainer>
    </Container>
  );
}

export default SearchAns;
