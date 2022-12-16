import React from 'react';

import {ParagraphProps} from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({size = 'medium', children, className, ...props}: ParagraphProps): JSX.Element => {
  const buttonSizeStyles = cn({
    [styles[size]]: size
  });

  return (
    <p className={cn(styles.p, buttonSizeStyles)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
