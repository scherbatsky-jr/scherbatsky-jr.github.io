import * as React from "react"

import Content from "./content"
import Header from "./header"
import Sidebar from "./sidebar"

import * as layoutStyles from "../assets/css/components/layout.module.css"

const Layout = () => {
  return (
    <>
      <div className={layoutStyles.layout}>
        <Header />
        <Sidebar className={layoutStyles.sidebar} />
        <Content />
      </div>
    </>
  )
}

export default Layout