import React from 'react';

export default function ProductImage(props) {
  const url = 'http://test.api.weniv.co.kr/' + props.thumbnailImg;

  return (
    <>
      <img src={url} alt={props.productName} />
    </>
  );
}
