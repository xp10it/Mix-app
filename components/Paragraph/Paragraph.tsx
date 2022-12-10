import React from 'react';

import {ParagraphProps} from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({size = 'medium', children, className, ...props}: ParagraphProps): JSX.Element => {
  return (
    <p className={cn(styles.p, {
      [styles.s]: size === 'small',
      [styles.m]: size === 'medium',
      [styles.l]: size === 'large'
    })}
    {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
