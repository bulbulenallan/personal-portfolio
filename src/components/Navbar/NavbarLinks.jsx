import React from 'react'

const NavbarLinks = ({href, label,active, onclick}) => {
  return (
    <li>
        <a href={href} className={active? "active" : ''}>{label}</a>
    </li>
  )
}

export default NavbarLinks