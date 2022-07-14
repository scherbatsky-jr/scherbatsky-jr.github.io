import * as React from "react"

import Content from "./content"
import Sidebar from "./sidebar"

import * as layoutStyles from "../assets/css/components/layout.module.css"

const Layout = () => {
  return (
    <>
      <div className={layoutStyles.layout}>
        <Sidebar className={layoutStyles.sidebar} />
        <Content />
      </div>
    </>
  )
}

export default Layout