import React from 'react';

interface PlaceholderModalProps {
  outputCount: number;
}
export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  outputCount = 1,
  children,
}) => {
  const placeholderArr = [...Array(outputCount)].fill(children);
  return React.Children.map(placeholderArr, child => React.cloneElement(child));
};
