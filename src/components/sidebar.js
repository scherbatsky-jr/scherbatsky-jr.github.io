import * as React from "react"

import * as sideBarStyles from "../assets/css/components/sidebar.module.css"

import { Icon } from '@iconify/react';
import SideBarMenu from "./sidebarMenu";

const Sidebar = () => {
  return (
    <>
      <div className={sideBarStyles.sidebar}>
        <div className={sideBarStyles.profilePhoto} />
        <span className={sideBarStyles.name}>Sunil Prajapati</span>
        <div className={sideBarStyles.icons}>
          <Icon className={sideBarStyles.icon} icon="bx:phone-call" />
          <Icon className={sideBarStyles.icon} icon="charm:mail" />
          <Icon className={sideBarStyles.icon} icon="akar-icons:linkedin-box-fill" />
          <Icon className={sideBarStyles.icon} icon="akar-icons:github-fill" />
        </div>
        <SideBarMenu />
      </div>
    </>
  )
}

export default Sidebar
