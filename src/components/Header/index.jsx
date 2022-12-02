import React from 'react'
import { PrimaryNav, MenuLink, Menu,Hamburger } from './NavElements'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            logo
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Search
          </MenuLink> 
          <MenuLink to="/register" activeStyle>
            Products
          </MenuLink>
          
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
