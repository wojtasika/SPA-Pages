import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Product = (props) => {
  return (
    <article className="product">
      <h1>{props.id}</h1>
    </article>
  );
}
export default Product;