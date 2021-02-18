import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './Navigation.module.scss'
import Search from './Search/Search'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
function Navigation() {
  const [hamburgerIcon, setHamburgerIcon] = useState<boolean>(false)
  return (
    <Navbar className={styles.navbar} bg='light' expand='md' sticky='top'>
      <Navbar.Toggle className={styles.toggle} aria-controls='basic-navbar-nav'>
        {hamburgerIcon ? (
          <IconButton onClick={() => setHamburgerIcon(!hamburgerIcon)}>
            <CloseIcon className={styles.closeIcon} fontSize='large' />
          </IconButton>
        ) : (
          <IconButton onClick={() => setHamburgerIcon(!hamburgerIcon)}>
            <MenuIcon className={styles.hamburgerIcon} fontSize='large' />
          </IconButton>
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown
            className={styles.dropDown}
            title='Movies'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Popular</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Now Playing</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>UpComing</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Top Rated</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='Tv Shows'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Popular</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Airing Today</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Latest</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.4'>Top Rated</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='People'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>
              Popular People
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
