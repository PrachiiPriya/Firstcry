import React, { useState } from 'react';
import { Box, Menu, MenuItem, styled, Typography } from '@mui/material';
import { navData } from '../../constants/Data';
import { yellow } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

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

const MenuTitle = styled(Typography)`
  padding: 10px;
  cursor: pointer;
`;

export default function Navbar() {
  const navigate = useNavigate();
  const [dropMenu, setDropMenu] = useState(null);
  const [submenu, setSubmenu] = useState([]);

  const handleMenuOpen = (event, items) => {
    setDropMenu(event.target);
    setSubmenu(items);
  };

  const handleMenuClose = () => {
    setDropMenu(null);
    setSubmenu([]);
  };

   const menuItemPg = (Item) => {
    navigate(`/search/${Item}`);
    handleMenuClose();
   }
  return (
    <StyledDiv>
      <Component>
        {navData.map((data, index) => (
          <MenuTitle
            key={index}
            onClick={(event) => handleMenuOpen(event, data.submenu)}
          >
            {data.text}
          </MenuTitle>
        ))}
      </Component>
      <Menu
        anchorEl={dropMenu}
        open={Boolean(dropMenu)}
        onClose={handleMenuClose}
      >
        {submenu.map((subItem, index) => (
          <MenuItem key={index} onClick={()=>menuItemPg(subItem)}>
            {subItem}
          </MenuItem>
        ))}
      </Menu>
    </StyledDiv>
  );
}
