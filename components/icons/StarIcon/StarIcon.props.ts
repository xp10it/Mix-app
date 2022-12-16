import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface StarIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLOrSVGImageElement>, HTMLOrSVGImageElement> {
  classNames?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  isEditable?: boolean;
}