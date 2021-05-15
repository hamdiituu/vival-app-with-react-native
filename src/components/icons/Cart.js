import * as React from 'react';
import Svg, {Mask, Path} from 'react-native-svg';

function SvgCart(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 22 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="cart_svg__a" fill="#fff">
        <Path d="M0 9a1 1 0 011-1h20a1 1 0 011 1v16a4 4 0 01-4 4H4a4 4 0 01-4-4V9z" />
      </Mask>
      <Path
        d="M0 9a1 1 0 011-1h20a1 1 0 011 1v16a4 4 0 01-4 4H4a4 4 0 01-4-4V9z"
        stroke="#000"
        strokeWidth={4}
        mask="url(#cart_svg__a)"
      />
      <Path
        d="M6 14V6.5A5.5 5.5 0 0111.5 1v0A5.5 5.5 0 0117 6.5V14"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgCart;
