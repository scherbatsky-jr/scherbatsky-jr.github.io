import * as React from "react"

import * as menuStyles from "../assets/css/components/sidebarMenu.module.css"

import SidebarOption from "./SidebarOption"

const SideBarMenu = () => {
  const sidebarOptions = [
    {
      label: "About Me",
      routeName: "home"
    },
    {
      label: "Professional Experience",
      routeName: "experience"
    },
    {
      label: "Expertise",
      routeName: "expertise"
    },
    {
      label: "Education",
      routeName: "education"
    }
  ]
  
  return (
    <>
      <div className={menuStyles.sidebarMenu}>
      {
        sidebarOptions.map(option => {
          return <SidebarOption option={option} />
        })
      }
      </div>
    </>
  )
}

export default SideBarMenu