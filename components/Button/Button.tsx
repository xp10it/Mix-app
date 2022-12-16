import React from 'react';
import cn from 'classnames';

import {ButtonProps} from './Button.props';
import styles from './Button.module.css';
import {ArrowIcon} from "../icons/ArrowIcon/ArrowIcon";

export function Button({appearance, arrow = "none", children, className, ...props}: ButtonProps): JSX.Element {
  return (
    <button className={cn(styles.button, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost'
    })}
    {...props}
    >
      {children}
      {arrow !== 'none' &&
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down'
        })}
        >
          <ArrowIcon />
        </span>
      }
    </button>
  );
}
