import * as React from "react"
import { Icon } from '@iconify/react';

import * as optionStyles from "../assets/css/components/sidebarOption.module.css"

const SidebarOption = (props) => {
  const option = props.option

  return (
    <>
      <a
        className={optionStyles.sidebarOption}
        href={option.routeName}
      >
        <Icon className={optionStyles.icon} icon={option.icon} />
        <span className={optionStyles.label}>{option.label}</span>
      </a>
    </>
  )
}

export default SidebarOption