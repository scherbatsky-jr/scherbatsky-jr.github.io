import * as React from "react"

import * as optionStyles from "../assets/css/components/sidebarOption.module.css"

const SidebarOption = (props) => {
  const option = props.option

  return (
    <>
      <a
        className={optionStyles.sidebarOption}
        href={option.routeName}
      >
        {option.label}
      </a>
    </>
  )
}

export default SidebarOption