import React from 'react';
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';
import './style.css';
const MyPlaceholder = () => (
  <div>
    <br />
    <RectShape color="#E0E0E0" style={{width: 300, height: 350}} />
    <br />
    <TextBlock rows={1} color="#E0E0E0" style={{width: 200}} />
    <br />
    <TextBlock
      rows={1}
      color="#E0E0E0"
      style={{width: 300, border: '1px', borderRadius: '50px'}}
    />
  </div>
);

export const HeroPlaceholder = () => {
  return (
    <ReactPlaceholder ready={true} customPlaceholder={<MyPlaceholder />}>
      <MyPlaceholder />
    </ReactPlaceholder>
  );
};
