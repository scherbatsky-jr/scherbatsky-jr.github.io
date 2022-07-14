import * as React from "react"
import { Icon } from '@iconify/react';

import * as headerStyles from "../assets/css/components/header.module.css"

import menuOptions from "../utils/menuOptions"

const Header = () =>  {
  return (
    <>
      <div className={headerStyles.header}>
        <a><Icon icon="bx:user-circle" /></a>
        {
          menuOptions.map(option => {
            return <a><Icon icon={option.icon} /></a>
          })
        }
      </div>
    </>
  )
}

export default Header
