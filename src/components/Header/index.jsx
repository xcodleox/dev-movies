import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Header1, Menu, Li } from './style'

export function Header() {
  const [changerBackground, setChangerBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      setChangerBackground(true)
    } else {
      setChangerBackground(false)
    }
  }

  return (
    <>
      <Header1 changerBackground={changerBackground}>
        <img src={Logo} alt="logo-dev-movies" />
        <Menu>
          <Li $isActive={pathname === '/'}>
            <Link to="/">Home</Link>
          </Li>
          <Li $isActive={pathname.includes('filmes')}>
            <Link to="/filmes">Filmes</Link>
          </Li>
          <Li $isActive={pathname.includes('series')}>
            <Link to="/series">Séries</Link>
          </Li>
        </Menu>
      </Header1>
    </>
  )
}
