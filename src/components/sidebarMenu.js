import * as React from "react"

import * as menuStyles from "../assets/css/components/sidebarMenu.module.css"

import SidebarOption from "./SidebarOption"

import menuOptions from "../utils/menuOptions"

const SideBarMenu = () => {  
  return (
    <>
      <div className={menuStyles.sidebarMenu}>
      {
        menuOptions.map(option => {
          return <SidebarOption option={option} />
        })
      }
      </div>
    </>
  )
}

export default SideBarMenu