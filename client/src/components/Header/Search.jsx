import { InputBase,Box, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContainer=styled(Box)`
background-color:#FFFFFF;
width: 25%;
display:flex;
border-radius: 2px;
margin-left:10px;
`;
const InputSearchBase=styled(InputBase)`
width:100%;
padding-right:20px;
font-size:unset;

`;
const SearchIconWrapper=styled(SearchIcon)`
color:${pink[500]}
`;

export default function Search() {
  const [Item,setItem]=useState("");
  const navigate = useNavigate();

  const changeHandler=(e)=>{
    setItem(e.target.value);
    console.log(Item);
  }
  const submitHandler = () => {
    navigate(`/search/${Item}`);
  };

  return (
    <SearchContainer>
      <InputSearchBase onChange={(e)=>{changeHandler(e)}} placeholder='Search for a category, brand, or product.'name='searchItem'/>
      <SearchIconWrapper onClick={submitHandler}>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  )
}
