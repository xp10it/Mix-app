import React from "react";

import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
}
