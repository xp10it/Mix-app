import React from "react";
import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export function Tag({
  size = "medium",
  children,
  href,
  color = "ghost",
  className,
  ...props
}: TagProps) {
  const buttonSizeStyles = cn({
    [styles[size]]: size,
    [styles[color]]: color,
  });

  return (
    <div className={cn(styles.tag, className, buttonSizeStyles)} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}
