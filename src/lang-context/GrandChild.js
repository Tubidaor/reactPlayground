import React from 'react';
import GreatGrandChild from './GreatGrandChild';

export default function Grandchild() {
  return (
    <div className='GranChild'>
      <GreatGrandChild />
    </div>
  );
}