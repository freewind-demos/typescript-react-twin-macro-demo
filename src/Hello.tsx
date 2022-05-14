import React, {FC} from 'react';
import tw from 'twin.macro'
import {css} from '@emotion/react';
import './index.css';

const inputStyles = css`
  border: 10px solid blue;
`

const hoverStyles = css`
  &:hover {
    border: 20px solid red;
    ${tw`text-black`}
  }
`

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div className={'Hello'}>
    <h1>Hello React</h1>
    <input css={[tw`border`, inputStyles, hoverStyles]}/>
  </div>;
}

