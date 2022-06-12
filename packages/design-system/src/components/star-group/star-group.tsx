import React, { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { SpaceProps } from '@chakra-ui/react';

type Rate = 0 | 1 | 2 | 3 | 4 | 5;
type StarSize = 'sm' | 'md';

enum StarSizeMap {
  sm = '18px',
  md = '30px',
}

type StarsGroupPropType = {
  onClick?: (r: Rate) => void;
  rate: Rate;
  isDisabled: boolean;
  size: StarSize;
  spacing?: SpaceProps['marginEnd'],
};

export const StarGroup = ({ onClick = () => null, rate : initialRate, isDisabled, size='md', spacing = 'xs' }: StarsGroupPropType) => {
  /*States and consts*/
  const [rate, setRate] = useState<Rate>(initialRate);

  /*Functions*/
  const onClickStar = (newRate: Rate) => {
    setRate(newRate);
    onClick(newRate);
  };
  const getSelectedStarColor = isDisabled ? 'gray.400' : 'yellow.400';
  const starSize = StarSizeMap[size];
  const rateArray :Array<Rate> = [1, 2, 3, 4 , 5];
  return (
    <>
      {rateArray.map((starIndex, index,) => (
        <StarIcon
          key={`star-icon-${starIndex}`}
          onClick={() => !isDisabled && onClickStar(starIndex) }
          color={rate >= starIndex ? getSelectedStarColor : 'gray.200'}
          w={starSize}
          h={starSize}
          cursor={'pointer'}
          marginEnd={index + 1 !== rateArray.length ? spacing : undefined}
        />
      ))}
    </>
  );
};

export type {
  Rate, StarSize,
}
