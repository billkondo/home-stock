import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

import { Tag } from '../../../../../state/tags/types';

import Front from './Front';
import Back from './Back';

interface Props {
  tag: Tag;
}

const TagCard: React.FC<Props> = ({ tag }) => {
  const [side, setSide] = useState(false);

  const moveFront = () => setSide(false);
  const moveBack = () => setSide(true);

  return (
    <div onMouseEnter={moveBack} onMouseLeave={moveFront}>
      <CardFlip flipDirection="horizontal" isFlipped={side}>
        <Front key="front" tag={tag} />
        <Back key="back" />
      </CardFlip>
    </div>
  );
};

export default TagCard;
