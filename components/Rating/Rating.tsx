import React, { useEffect, useState } from "react";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({
  isEditable = false,
  setRating,
  className,
  rating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
    console.log(ratingArray);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((rating: JSX.Element, i: number) => {
      return (
        <StarIcon
          classNames={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
        />
      );
    });

    setRatingArray(updateArray);
  };

  return (
    <StarIcon />
  );
};

export default Rating;
