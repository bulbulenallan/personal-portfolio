import React from 'react'

const NavbarLinks = ({href, label}) => {
  return (
    <li>
        <a href={href}>{label}</a>
    </li>
  )
}

export default NavbarLinks