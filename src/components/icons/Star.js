import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStar(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 26 24"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.103.817a1 1 0 011.794 0l2.985 6.048a1 1 0 00.753.547l6.675.97a1 1 0 01.554 1.706l-4.83 4.708a1 1 0 00-.288.885l1.14 6.648a1 1 0 01-1.45 1.054l-5.97-3.138a1 1 0 00-.931 0l-5.97 3.138a1 1 0 01-1.451-1.054l1.14-6.648a1 1 0 00-.288-.885l-4.83-4.708a1 1 0 01.554-1.706l6.675-.97a1 1 0 00.753-.547L12.103.817z"
        fill="black"
      />
    </Svg>
  );
}

export default SvgStar;
