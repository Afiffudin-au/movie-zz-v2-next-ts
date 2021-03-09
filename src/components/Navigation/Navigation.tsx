import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './Navigation.module.scss'
import Search from './Search/Search'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import { IconButton } from '@material-ui/core'
function Navigation({ homeBack }: { homeBack?: boolean }) {
  const [hamburgerIcon, setHamburgerIcon] = useState<boolean>(false)
  return (
    <Navbar className={styles.navbar} bg='light' expand='md' sticky='top'>
      {homeBack && (
        <Navbar.Brand style={{ marginRight: '0' }} href='/'>
          <IconButton style={{ padding: '0' }}>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
        </Navbar.Brand>
      )}

      <Navbar.Toggle className={styles.toggle} aria-controls='basic-navbar-nav'>
        {hamburgerIcon ? (
          <CloseIcon
            onClick={() => setHamburgerIcon(!hamburgerIcon)}
            className={styles.closeIcon}
          />
        ) : (
          <MenuIcon
            onClick={() => setHamburgerIcon(!hamburgerIcon)}
            className={styles.hamburgerIcon}
          />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown
            className={styles.dropDown}
            title='Movies'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/movie/popular' className={styles.item}>
              Popular
            </NavDropdown.Item>
            <NavDropdown.Item href='/movie/now_playing' className={styles.item}>
              Now Playing
            </NavDropdown.Item>
            <NavDropdown.Item href='/movie/upcoming' className={styles.item}>
              UpComing
            </NavDropdown.Item>
            <NavDropdown.Item href='/movie/top_rated' className={styles.item}>
              Top Rated
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='Tv Shows'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/tv/popular'>Popular</NavDropdown.Item>
            <NavDropdown.Item href='/tv/airing_today'>
              Airing Today
            </NavDropdown.Item>
            <NavDropdown.Item href='/tv/on_the_air'>
              On The Air
            </NavDropdown.Item>
            <NavDropdown.Item href='/tv/top_rated'>Top Rated</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='People'
            id='basic-nav-dropdown'>
            <NavDropdown.Item href='/people/popular-people'>
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
