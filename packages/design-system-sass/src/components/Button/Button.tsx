import React from 'react';
import './index.scss';

interface ButtonProps {
  title: string;
  tooltip?: string;
}

const ButtonV2 = ({ title, tooltip }: ButtonProps) => {
  return (
    <button className="text--lg color--red.500">
      {title}
      {tooltip ? '- ' + tooltip : ''}
    </button>
  );
};

export { ButtonV2 };
