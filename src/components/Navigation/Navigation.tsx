import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styles from './Navigation.module.scss'
import Search from './Search/Search'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import { IconButton } from '@material-ui/core'
import Link from 'next/link'
function Navigation({ homeBack }: { homeBack?: boolean }) {
  const [hamburgerIcon, setHamburgerIcon] = useState<boolean>(false)
  return (
    <Navbar className={styles.navbar} bg='light' expand='md' sticky='top'>
      <Navbar.Brand>
        <Link href='/'>
          <a className={styles.customBrand}>MZ</a>
        </Link>
      </Navbar.Brand>
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
            <div>
              <div className={styles.navItem}>
                <Link href='/movie/popular'>
                  <a>Popular</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/movie/now_playing'>
                  <a> Now Playing</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/movie/upcoming'>
                  <a>UpComing</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/movie/top_rated'>
                  <a>Top Rated</a>
                </Link>
              </div>
            </div>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='Tv Shows'
            id='basic-nav-dropdown'>
            <div>
              <div className={styles.navItem}>
                <Link href='/tv/popular'>
                  <a>Popular</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/tv/airing_today'>
                  <a>Airing Today</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/tv/on_the_air'>
                  <a>On The Air</a>
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link href='/tv/top_ratedr'>
                  <a>Top Rated</a>
                </Link>
              </div>
            </div>
          </NavDropdown>
          <NavDropdown
            className={styles.dropDown}
            title='People'
            id='basic-nav-dropdown'>
            <div>
              <div className={styles.navItem}>
                <Link href='/people/popular-people'>
                  <a>Popular</a>
                </Link>
              </div>
            </div>
          </NavDropdown>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
