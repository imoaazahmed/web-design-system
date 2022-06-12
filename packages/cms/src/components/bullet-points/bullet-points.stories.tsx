import * as React from 'react';
import { BulletPoints } from './bullet-points';
export default {
  title: 'CMS/Bullet Points',
};

const content = {
  title: 'Hello',
  subtitle: 'Hello 2',
  bulletpoints: ['Bla', 'Bla', 'Bla', 'Bla', 'Bla', 'Bla', 'Bla', 'Bla'],
};

export const BulletPointsStory = () => {
  return <BulletPoints content={content} />;
};
