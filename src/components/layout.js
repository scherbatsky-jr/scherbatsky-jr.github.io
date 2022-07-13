import * as React from "react"

import Sidebar from "./sidebar"
import Content from "./content"

import * as layoutStyles from "../assets/css/components/layout.module.css"

const Layout = () => {
  return (
    <>
      <div className={layoutStyles.layout}>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default Layout