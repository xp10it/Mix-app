import React, { useEffect, useState } from "react";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "../icons/StarIcon/StarIcon";

export function Rating({
  isEditable = false,
  setRating,
  className,
  rating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          classNames={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickHandler(i + 1)}
        />
      );
    });

    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  const onClickHandler = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((star: JSX.Element, i: number) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
}
