import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import { navData } from '../../constants/Data';
import { yellow } from '@mui/material/colors';

const Component = styled(Box)`
  display: flex;
  margin: 100px 130px 0 130px;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledDiv = styled('div')({
  backgroundColor: yellow[500],
  height: '50px',
});

export default function Navbar() {
  return (
    <StyledDiv>
      <Component>
        {navData.map((data, index) => (
          <Typography key={index}>{data.text}</Typography>
        ))}
      </Component>
    </StyledDiv>
  );
}
