import * as React from "react"

import * as sideBarStyles from "../assets/css/components/sidebar.module.css"

const Sidebar = () => {
  return (
    <>
      <div className={sideBarStyles.sidebar}>
        <div className={sideBarStyles.profilePhoto} />
        <span>Sunil Prajapati</span>
        <span>+977 9742939257</span>
        <span>sunilpzpt@gmail.com</span>
      </div>
    </>
  )
}

export default Sidebar
