import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

type ColorTypes = 'ghost' | 'red' | 'grey' | 'green' | 'primary';
type SizeTypes = 'medium' | 'small';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: SizeTypes;
  color?: ColorTypes,
  href?: string
}